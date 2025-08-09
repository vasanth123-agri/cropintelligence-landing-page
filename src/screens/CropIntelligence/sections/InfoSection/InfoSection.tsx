import { ArrowUpRightIcon } from "lucide-react";
import  { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { type CarouselApi } from "../../../../components/ui/carousel";

interface BlogData {
  id: number;
  title: string;
  content: string;
  authorName: string;
  cropName: string;
  farmSize: string;
  profilePic: string;
  images: string;
  createdAt: string;
  updatedAt: string;
}

export const InfoSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [blogData, setBlogData] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch blog data from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://agriinverseblogs-production.up.railway.app/blogs/v1');
        const result = await response.json();
        if (result.message === "Fetched Blogs Successfully") {
          setBlogData(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Helper function to strip HTML tags and get plain text
  const stripHtmlTags = (html: string): string => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  // Helper function to truncate text to exactly 3 lines
  const truncateToLines = (text: string, maxLines: number = 3): string => {
    const words = text.split(' ');
    const wordsPerLine = 12; // Approximate words per line for better accuracy
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  // Function to open blog in new page
  const openBlogInNewPage = (blog: BlogData) => {
    const blogPageUrl = `/blog/${blog.id}`;
    
    // Create a new window/tab with the blog content
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${blog.title} - ${blog.authorName}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
          <style>
            body { font-family: 'Open Sans', sans-serif; }
          </style>
        </head>
        <body class="bg-gray-50 min-h-screen">
          <div class="max-w-4xl mx-auto px-4 py-8">
            <!-- Header -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div class="flex items-start gap-6">
                <img 
                  src="${blog.profilePic}" 
                  alt="${blog.authorName}"
                  class="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                />
                <div class="flex-1">
                  <h1 class="text-2xl font-bold text-gray-900 mb-2">${blog.title}</h1>
                  <h2 class="text-xl font-semibold text-green-700 mb-3">by ${blog.authorName}</h2>
                  <div class="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span class="bg-green-50 px-3 py-1 rounded-full">
                      <span class="font-medium">Crop:</span> ${blog.cropName}
                    </span>
                    <span class="bg-blue-50 px-3 py-1 rounded-full">
                      <span class="font-medium">Farm Size:</span> ${blog.farmSize}
                    </span>
                    <span class="bg-gray-50 px-3 py-1 rounded-full">
                      <span class="font-medium">Published:</span> ${new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="prose prose-lg max-w-none">
                ${blog.content}
              </div>
            </div>
            
            <!-- Footer -->
            <div class="mt-8 text-center">
              <button 
                onclick="window.close()" 
                class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  if (loading) {
    return (
      <section className="w-full pt-0 pb-4 sm:pb-6 lg:pb-4 relative">
        <div className="w-full max-w-[1000px] mx-auto flex justify-center items-center h-[400px]">
          <div className="text-lg text-gray-600">Loading blogs...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full pt-0 pb-4 sm:pb-6 lg:pb-4 relative">
      <Carousel setApi={setApi} className="w-full max-w-[1000px] mx-auto">
        <CarouselContent className={`-ml-2 md:-ml-4 ${currentSlide === 0 ? 'pl-4 sm:pl-8 lg:pl-12' : ''}`}>
          {blogData.map((blog, index) => {
            const plainTextContent = stripHtmlTags(blog.content);
            const truncatedContent = truncateToLines(plainTextContent, 3);
            const needsReadMore = plainTextContent.length > truncatedContent.length;
            
            return (
              <CarouselItem key={blog.id} className={`pl-2 md:pl-4 basis-[85%] md:basis-[80%] transition-all duration-300 ${index !== currentSlide ? 'blur-sm opacity-60' : ''}`}>
                <Card className="rounded-xl border border-solid border-[#edf4f1] shadow-[2px_2px_60px_4px_#0037141c] bg-white h-[400px] sm:h-[400px] lg:h-[380px]">
                  <CardContent className="p-0 flex lg:flex-row flex-col h-full">
                    <div className="relative lg:w-[263px] w-full lg:h-full h-[200px] lg:p-[30px] p-[20px]">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        alt={`${blog.authorName} profile`}
                        src={blog.profilePic}
                        loading="eager"
                      />
                    </div>

                    <div className="flex-1 p-[20px] flex flex-col justify-between lg:mt-[14px] mt-0">
                      <div>
                        <h3 className="font-semibold text-lg text-[#1a1a1a] font-['Open_Sans',Helvetica] mb-[15px]">
                          {blog.authorName}
                        </h3>

                        <div className="mb-[20px]">
                          <div className="flex flex-wrap gap-x-5 gap-y-2">
                            <div className="font-['Open_Sans',Helvetica] text-[#474747] text-sm">
                              <span>Crop: </span>
                              <span className="font-semibold">{blog.cropName}</span>
                            </div>
                            <div className="font-['Open_Sans',Helvetica] text-[#474747] text-sm">
                              <span>Farm Size: </span>
                              <span className="font-semibold">
                                {blog.farmSize}
                              </span>
                            </div>
                            <div className="font-['Open_Sans',Helvetica] text-[#474747] text-sm">
                              <span>Blog: </span>
                              <span className="font-semibold">
                                {blog.title}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-[20px]">
                          <h4 className="font-semibold text-sm text-[#1a1a1a] font-['Open_Sans',Helvetica] mb-[8px]">
                            Here&apos;s what they shared:
                          </h4>
                          <p className="font-['Open_Sans',Helvetica] font-normal text-black text-sm leading-[24px] mb-0">
                            {truncatedContent}
                          </p>
                          {needsReadMore && (
                            <Button
                              variant="ghost"
                              onClick={() => openBlogInNewPage(blog)}
                              className="p-0 h-auto font-['Open_Sans',Helvetica] font-semibold text-sm text-[#006837] hover:bg-transparent hover:text-[#006837]/90 flex items-center gap-1 mt-[12px]"
                            >
                              Read More
                              <ArrowUpRightIcon className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mr-2 translate-y-0" />
          <CarouselNext className="relative static ml-2 translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
};
