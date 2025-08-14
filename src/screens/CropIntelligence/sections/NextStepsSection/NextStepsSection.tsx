import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import bg from "../../../../assets/bg.svg";
import iconfour from "../../../../assets/iconfour.svg";
import iconfive from "../../../../assets/Iconfive.svg";
import iconsix from "../../../../assets/iconsix.svg";

import monitor from "../../../../assets/monitor.svg"
import device from "../../../../assets/device.gif"

export const NextStepsSection = (): JSX.Element => {
  // Data for feature cards
  // FIX 1: Simplified the description to a single string for cleaner rendering.
  const featureCards = [
    {
      icon: iconfour,
      title: "Sensors",
      description: "With 10+ precision sensors",
      number: "10+",
    },
    {
      icon: iconfive,
      title: "Research",
      description: "With 150+ Research parameters",
      number: "150+",
    },
    {
      icon: iconsix,
      title: "Monitoring",
      description: "Our device monitors your crop 24/7",
      number: "24/7",
    },
  ];

  const handleCalendlyAppointment = () => {
    window.open("https://calendly.com/jeydev007/crop-intelligence-meeting", "_blank");
  }

  return (
    <section className="w-full bg-white">
      <div
        className="min-h-[600px] sm:min-h-[700px] lg:h-[819px] bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-0"
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
        <div className="relative w-full max-w-[95%] sm:max-w-[846px] lg:max-w-[1152px] min-h-[243px] sm:min-h-[650px] lg:h-[754px] mx-auto pt-8 pb-8 sm:pt-12 sm:pb-12 lg:mt-[128px] rounded-[16px] sm:rounded-[20px] lg:rounded-[22px] overflow-hidden ">
          <div className="relative min-h-[540px] sm:min-h-[640px] lg:h-[740px] bg-[#fffffff5] rounded-lg sm:rounded-xl backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] p-4 sm:p-6 lg:p-0">
            {/* Heading */}
            <div className="text-center pt-6 sm:pt-8 lg:pt-[49px] px-2 sm:px-4 lg:px-0">
              <h2 className="[font-family:'Jost',Helvetica] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-[1.4] sm:leading-[1.5] lg:leading-[56px]">
                <span className="text-[#2c2c2c]">How Our Device Drives</span>
                <span className="text-[#006837]"> Efficiency &amp; Yield</span>
              </h2>

              {/* Desktop subheading below title */}
              <p className="hidden lg:block [font-family:'Jost',Helvetica] font-medium italic text-[#6d6d6d] text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-[1.4] sm:leading-[1.5] lg:leading-[56px] mt-2 lg:mt-0">
                Powered by Data. Proven by Results.
              </p>
            </div>

            <div className="block lg:hidden w-full flex justify-center mt-4">
              <img src={device} alt="Device demo" className="w-full max-w-[520px] h-auto object-contain rounded-lg" loading="eager" />
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:px-11 mt-6 sm:mt-8 lg:mt-[42px] gap-6 lg:gap-8">
              {/* Left column with feature cards */}
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full lg:w-[542px]">
                {featureCards.map((card, index) => (
                  <Card
                    key={index}
                    className="w-full h-auto min-h-[90px] sm:min-h-[100px] lg:min-h-[114px] bg-white rounded-lg border border-solid border-green-100 shadow-[0px_1px_2px_#0000000d] overflow-hidden"
                  >
                    {/* FIX 2: Refactored card content to use Flexbox for a more robust layout. */}
                    <CardContent className="relative flex items-center p-4 h-full">
                      <img
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0"
                        alt="Feature icon"
                        src={card.icon}
                      />
                      <div className="ml-4">
                        <div className="[font-family:'Open_Sans',Helvetica] font-bold text-gray-800 text-base sm:text-lg lg:text-[22px] tracking-[0] leading-6 lg:leading-7">
                          {card.title}
                        </div>
                        {/* FIX 3: Simplified description rendering. */}
                        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-600 text-xs sm:text-sm lg:text-lg tracking-[0] leading-5 lg:leading-6 mt-1">
                          {card.description}
                        </p>
                      </div>
                      {/* FIX 4: Changed positioning from bottom to top. */}
                      <div
                        className="absolute top-2 right-4 [font-family:'Open_Sans',Helvetica] font-bold text-[#0f0f0f1c] text-4xl sm:text-5xl lg:text-6xl select-none"
                      >
                        {card.number}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Call to action button */}
                <Button className="w-full h-[40px] sm:h-[52px] lg:h-[58px] mt-1 sm:mt-2 lg:mt-1 bg-[#006837] text-white rounded-lg hover:bg-[#005a2f]" onClick={handleCalendlyAppointment}>
                  <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-[19px] w-full ">
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                      See What We Monitor
                    </span>
                    <img
                      className="w-[30px] h-[30px] bg-white rounded-full p-1 "
                      alt="Play"
                      src={monitor}
                    />
                  </div>
                </Button>

                {/* Mobile subheading after GIF */}
                <p className="block lg:hidden text-center [font-family:'Jost',Helvetica] font-medium italic text-[#6d6d6d] text-base sm:text-lg tracking-[0] leading-[1.4] sm:leading-[1.5] mt-4">
                  Powered by Data. Proven by Results.
                </p>
              </div>

              {/* MODIFICATION START: Right column structure updated to include text underneath */}
              <div className="hidden lg:flex flex-col items-center w-full lg:w-[542px]">
                <img src={device} alt="Device demo" className="max-w-[520px] max-h-[520px] w-auto h-auto object-contain select-none pointer-events-none" loading="eager" />
                <p className="[font-family:'Jost',Helvetica] font-medium italic text-[#4f4f4f] text-2xl text-center leading-9 mt-6">
                  We helping you boost yields, reduce inputs and grow smarter.
                </p>
              </div>
              {/* MODIFICATION END */}

            </div>

            {/* MODIFICATION: The original absolutely positioned footer text has been removed from here */}

          </div>
        </div>
      </div>
    </section>
  );
};