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
import farmer from "../../../../assets/farmerone.svg";
import { type CarouselApi } from "../../../../components/ui/carousel";

export const InfoSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  // Case study data for mapping
  const caseStudies = [
    {
      id: 1,
      name: "Rajendra Pawar",
      image: farmer,
      crop: "Maize",
      farmSize: "5 acres",  
      location: "Maharashtra",
      description:
        "Our device observations at a cucumber farm in Pollachi revealed a major heat-induced water stress issue. By 11 AM, temperatures inside the polyhouse soared to approximately 40°C, far surpassing the cucumber plant's heat tolerance of around 35°C.",
    },
    {
      id:2,
      name:"Suresh Kumar",
      image: farmer,
      crop: "Tomato",
      farmSize: "3 acres",
      location: "Tamil Nadu",
      description:
        "Our device observations at a tomato farm in Pollachi revealed a major heat-induced water stress"
    },
    {
      id:3,
      image: farmer,
      crop:"Rice",
      farmSize: "2 acres",
      location: "Andhra Pradesh",
      description:
        "Our device observations at a rice farm in Andhra Pradesh showed that the crop was suffering from water stress due to high temperatures."
    }
   
  ];

  return (
    <section className="w-full py-12 relative">
      <Carousel setApi={setApi} className="w-full max-w-[1000px] mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {caseStudies.map((study, index) => (
            <CarouselItem key={study.id} className={`pl-2 md:pl-4 basis-[85%] md:basis-[80%] transition-all duration-300 ${index !== currentSlide ? 'blur-sm opacity-60' : ''}`}>
              <Card className="rounded-xl border border-solid border-[#edf4f1] shadow-[2px_2px_60px_4px_#0037141c] bg-white h-[343px]">
                <CardContent className="p-0 flex h-full">
                  <div className="relative w-[263px] h-[90%] p-[30px]">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      alt="Farmer portrait"
                      src={study.image}
                    />
                  </div>

                  <div className="flex-1 p-[20px] flex flex-col justify-between mt-[14px]">
                    <div>
                      <h3 className="font-semibold text-lg text-[#1a1a1a] font-['Open_Sans',Helvetica] mb-[15px]">
                        {study.name}
                      </h3>

                      <div className="mb-[20px]">
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                          <div className="font-['Open_Sans',Helvetica] text-[#474747] text-sm">
                            <span>Crop: </span>
                            <span className="font-semibold">{study.crop}</span>
                          </div>
                          <div className="font-['Open_Sans',Helvetica] text-[#474747] text-sm">
                            <span>Farm Size: </span>
                            <span className="font-semibold">
                              {study.farmSize}
                            </span>
                          </div>
                          <div className="font-['Open_Sans',Helvetica] text-[#474747] text-sm">
                            <span>Location: </span>
                            <span className="font-semibold">
                              {study.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-[20px]">
                        <h4 className="font-semibold text-sm text-[#1a1a1a] font-['Open_Sans',Helvetica] mb-[8px]">
                          Here&apos;s what happened:
                        </h4>
                        <p className="font-['Open_Sans',Helvetica] font-normal text-black text-sm leading-[29.5px] mb-0">
                          {study.description}
                        </p>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto font-['Open_Sans',Helvetica] font-semibold text-sm text-[#006837] hover:bg-transparent hover:text-[#006837]/90 flex items-center gap-1 mt-[20px]"
                        >
                          Read Full Case Study
                          <ArrowUpRightIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mr-2 translate-y-0" />
          <CarouselNext className="relative static ml-2 translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
};
