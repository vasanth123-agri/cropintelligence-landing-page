import { ArrowUpRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
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

  // --- FIX 1: New helper function to extract the first image URL from HTML content ---
  const extractFirstImageUrl = (htmlContent: string, fallbackUrl: string): string => {
    // This function requires a browser environment to work (uses document)
    if (typeof window === 'undefined') return fallbackUrl;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const firstImage = tempDiv.querySelector('img');
    
    // Return the src of the first image, or the fallback URL if no image is found
    return firstImage?.src || fallbackUrl;
  };

  // Helper function to strip HTML tags and get plain text
  const stripHtmlTags = (html: string): string => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  // Helper function to truncate text to approximately 3 lines
  const truncateToLines = (text: string, maxLines: number = 3): string => {
    const words = text.split(' ');
    const wordsPerLine = window.innerWidth < 768 ? 8 : 12; 
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  // Function to open blog in new page
  const openBlogInNewPage = (blog: BlogData) => {
    const blogPageUrl = `/blog/${blog.id}`;
    
    // --- FIX 2: Use the helper function here as well for the opened blog page ---
    const displayImage = extractFirstImageUrl(blog.content, blog.profilePic);
    
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
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
          <style>
            body { 
              font-family: 'Inter', 'Open Sans', sans-serif; 
              line-height: 1.7;
              color: #1f2937;
            }
            .prose p { margin-bottom: 1.25rem; }
            .prose img { max-width: 100%; height: auto; margin: 1.5rem 0; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
            .prose code { 
              background: #f1f5f9; 
              padding: 0.125rem 0.375rem; 
              border-radius: 0.375rem; 
              font-size: 0.875rem;
              color: #475569;
              font-weight: 500;
            }
            .prose a { 
              color: #059669; 
              text-decoration: none; 
              font-weight: 500;
              border-bottom: 1px solid transparent;
              transition: all 0.2s ease;
            }
            .prose a:hover { 
              color: #047857; 
              border-bottom-color: #047857;
            }
            .gradient-bg {
              background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f7fee7 100%);
            }
            .card-shadow {
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
          </style>
        </head>
        <body class="gradient-bg min-h-screen">
          <div class="max-w-4xl mx-auto px-6 py-8">
            <div class="bg-white rounded-2xl card-shadow border border-gray-100 p-8 mb-8">
              <div class="flex items-start gap-8">
                <div class="relative">
                  <img 
                    src="${displayImage}" 
                    alt="${blog.authorName}"
                    class="w-24 h-24 rounded-2xl object-cover border-4 border-green-50"
                  />
                  <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-xl font-semibold text-green-700 mb-4">${blog.authorName}</h2>
                  <div class="flex flex-wrap gap-3">
                    <span class="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                      🌱 ${blog.cropName}
                    </span>
                    <span class="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                      🚜 ${blog.farmSize}
                    </span>
                    <span class="bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                      📅 ${new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-2xl card-shadow border border-gray-100 p-8 mb-8">
              <div class="prose prose-lg max-w-none leading-relaxed">
                ${blog.content}
              </div>
            </div>
            
            <div class="text-center">
              <div class="bg-white rounded-2xl card-shadow border border-gray-100 p-6 mb-6">
                <div class="flex justify-center gap-4">
                  <button 
                    onclick="window.close()" 
                    class="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  useEffect(() => {
    if (!api) return;
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
    <section className="w-full pt-0 pb-4 sm:pb-6 lg:pb-4 lg:mt-[80px] relative">
      <Carousel setApi={setApi} className="w-full max-w-[1000px] mx-auto">
        <CarouselContent className={`-ml-2 md:-ml-4 ${currentSlide === 0 ? 'pl-4 sm:pl-8 lg:pl-12' : ''}`}>
          {blogData.map((blog, index) => {
            const plainTextContent = stripHtmlTags(blog.content);
            const truncatedContent = truncateToLines(plainTextContent, 3);
            const needsReadMore = plainTextContent.length > truncatedContent.length;
            
            // --- FIX 3: Call the helper function to get the correct image URL ---
            const cardImageUrl = extractFirstImageUrl(blog.content, blog.profilePic);
            
            return (
              <CarouselItem key={blog.id} className={`pl-2 md:pl-4 basis-[85%] md:basis-[80%] transition-all duration-300 ${index !== currentSlide ? 'blur-sm opacity-60' : ''}`}>
                <Card className="rounded-xl border border-solid border-[#edf4f1] shadow-[2px_2px_60px_4px_#0037141c] bg-white h-[450px] sm:h-[420px] lg:h-[380px]">
                  <CardContent className="p-0 flex lg:flex-row flex-col h-full">
                    <div className="relative lg:w-[263px] w-full lg:h-full h-[180px] sm:h-[200px] lg:p-[30px] p-[20px]">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        alt={blog.title} // Use blog title for better alt text
                        src={cardImageUrl} // Use the extracted image URL
                        loading="eager"
                      />
                    </div>

                    <div className="flex-1 p-[15px] sm:p-[20px] flex flex-col lg:mt-[14px] mt-0 min-h-0">
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-semibold text-base sm:text-lg text-[#1a1a1a] font-['Open_Sans',Helvetica] mb-[10px] sm:mb-[15px]">
                          {blog.authorName}
                        </h3>

                        <div className="mb-[15px] sm:mb-[20px]">
                          <div className="flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-1 sm:gap-y-2">
                            <div className="font-['Open_Sans',Helvetica] text-[#474747] text-xs sm:text-sm">
                              <span>Crop: </span>
                              <span className="font-semibold">{blog.cropName}</span>
                            </div>
                            <div className="font-['Open_Sans',Helvetica] text-[#474747] text-xs sm:text-sm">
                              <span>Farm Size: </span>
                              <span className="font-semibold">
                                {blog.farmSize}
                              </span>
                            </div>
                            <div className="font-['Open_Sans',Helvetica] text-[#474747] text-xs sm:text-sm break-all">
                              <span>Blog: </span>
                              <span className="font-semibold">
                                {blog.title}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-semibold text-xs sm:text-sm text-[#1a1a1a] font-['Open_Sans',Helvetica] mb-[6px] sm:mb-[8px]">
                              Here&apos;s what they shared:
                            </h4>
                            <p className="font-['Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm leading-[20px] sm:leading-[24px] mb-0">
                              {truncatedContent}
                            </p>
                          </div>
                          {needsReadMore && (
                            <div className="mt-[8px] sm:mt-[12px]">
                              <Button
                                variant="ghost"
                                onClick={() => openBlogInNewPage(blog)}
                                className="p-0 h-auto font-['Open_Sans',Helvetica] font-semibold text-xs sm:text-sm text-[#006837] hover:bg-transparent hover:text-[#006837]/90 flex items-center gap-1"
                              >
                                Read More
                                <ArrowUpRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                              </Button>
                            </div>
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