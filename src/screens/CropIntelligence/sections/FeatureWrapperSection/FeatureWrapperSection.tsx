import { Card, CardContent } from "../../../../components/ui/card";
import featuregifone from "../../../../assets/Untitled Project 1.gif";
import featuregiftwo from "../../../../assets/ezgif.com-video-to-gif-converter 1.gif";

export const FeatureWrapperSection = (): JSX.Element => {
  // Data for the comparison cards
  const comparisonData = [
    {
      title: "With Proper Intelligence",
      bgColor: "bg-[#FCFCFF]",
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            className="h-full w-auto object-contain"
            alt="Plant without proper intelligence"
            src={featuregifone}
            loading="eager"
          />
        </div>
      ),
    },
    {
      title: "Without Proper Intelligence",
      bgColor: "bg-white",
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            className="h-full w-auto object-contain"
            alt="Plant with proper intelligence"
            src={featuregiftwo}
            loading="eager"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full mx-auto px-4 pt-[76px] pb-[76px] lg:pt-[213px] lg:pb-[213px]">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl text-[#331818] [font-family:'Jost',Helvetica] leading-[1.4] sm:leading-[1.5] lg:leading-[56px] mb-2">
          Timing Makes the Difference
        </h2>
        <p className="font-medium italic text-lg sm:text-xl lg:text-2xl text-[#6d6d6d] [font-family:'Jost',Helvetica] leading-[1.4] sm:leading-[1.5] lg:leading-[56px]">
          For Profit and Productivity
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-8 justify-center items-center xl:items-start">
        {comparisonData.map((item, index) => (
          <Card
            key={index}
            className={`w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] xl:w-[500px] h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[579px] overflow-hidden rounded-xl border-2 border-solid border-[#e1e1e1] ${item.bgColor} flex-shrink-0`}
          >
            <CardContent className="p-0 h-full">
              {/* Equalized layout: fixed header height + fixed content height */}
              <div className="flex h-full flex-col">
                {/* Fixed-height header */}
                <div className="flex-none text-center px-4 h-[48px] sm:h-[56px] lg:h-[64px] flex items-center justify-center">
                  <h3 className="font-medium text-lg sm:text-xl lg:text-2xl text-[#331818] [font-family:'Jost',Helvetica] leading-[1.4] lg:leading-[56px] truncate w-full">
                    {item.title}
                  </h3>
                </div>
                {/* Content with explicit equal heights across breakpoints */}
                <div className="flex-none px-3 sm:px-4 lg:px-6 h-[352px] sm:h-[394px] lg:h-[436px] xl:h-[515px]">
                  {item.content}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
