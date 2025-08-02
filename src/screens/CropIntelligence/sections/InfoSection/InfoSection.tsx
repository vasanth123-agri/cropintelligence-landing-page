import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
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

export const InfoSection = (): JSX.Element => {
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
   
  ];

  return (
    <section className="w-full py-12 relative">
      <Carousel className="w-full max-w-[846px] mx-auto">
        <CarouselContent>
          {caseStudies.map((study) => (
            <CarouselItem key={study.id}>
              <Card className="rounded-xl border border-solid border-[#edf4f1] shadow-[2px_2px_60px_4px_#0037141c] bg-white">
                <CardContent className="p-0 flex">
                  <div className="relative w-[263px] h-[283px] p-[30px]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Farmer portrait"
                      src={study.image}
                    />
                  </div>

                  <div className="flex-1 p-[30px]">
                    <h3 className="font-semibold text-xl text-[#1a1a1a] font-['Open_Sans',Helvetica] mb-[37px]">
                      {study.name}
                    </h3>

                    <div className="space-y-[66px]">
                      <div className="flex space-x-5">
                        <div className="font-['Open_Sans',Helvetica] text-[#474747] text-base">
                          <span>Crop: </span>
                          <span className="font-semibold">{study.crop}</span>
                        </div>
                        <div className="font-['Open_Sans',Helvetica] text-[#474747] text-base">
                          <span>Farm Size: </span>
                          <span className="font-semibold">
                            {study.farmSize}
                          </span>
                        </div>
                        <div className="font-['Open_Sans',Helvetica] text-[#474747] text-base">
                          <span>Location: </span>
                          <span className="font-semibold">
                            {study.location}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-[30px]">
                        <h4 className="font-semibold text-base text-[#1a1a1a] font-['Open_Sans',Helvetica]">
                          Here&apos;s what happened:
                        </h4>
                        <p className="font-['Open_Sans',Helvetica] font-normal text-black text-base leading-[26px]">
                          {study.description}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-['Open_Sans',Helvetica] font-semibold text-sm text-[#006837] hover:bg-transparent hover:text-[#006837]/90 flex items-center gap-1"
                      >
                        Read Full Case Study
                        <ArrowUpRightIcon className="w-6 h-6" />
                      </Button>
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
