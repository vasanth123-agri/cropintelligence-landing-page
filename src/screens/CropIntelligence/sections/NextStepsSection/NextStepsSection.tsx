import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import bg from "../../../../assets/bg.svg";
import iconfour from "../../../../assets/iconfour.svg";
import iconfive from "../../../../assets/Iconfive.svg";
import iconsix from "../../../../assets/iconsix.svg";
import header from "../../../../assets/header.svg";
import playIcon from "../../../../assets/Play.svg";

export const NextStepsSection = (): JSX.Element => {
  // Data for feature cards
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

  return (
    <section className="w-full bg-white">
      <div 
        className="h-[949px] bg-cover bg-[50%_50%]"
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
        <div className="relative w-full max-w-[1152px] h-[754px] mx-auto mt-[98px] rounded-[22px] overflow-hidden">
          <div className="relative h-[740px] bg-[#fffffff5] rounded-xl backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
            {/* Heading */}
            <div className="text-center pt-[49px]">
              <h2 className="[font-family:'Jost',Helvetica] font-medium text-4xl tracking-[0] leading-[56px]">
                <span className="text-[#2c2c2c]">How Our Device Drives</span>
                <span className="text-[#006837]"> Efficiency &amp; Yield</span>
              </h2>

              <p className="[font-family:'Jost',Helvetica] font-medium italic text-[#6d6d6d] text-2xl tracking-[0] leading-[56px] mt-0">
                Powered by Data. Proven by Results.
              </p>
            </div>

            <div className="flex flex-row justify-between px-11 mt-[42px]">
              {/* Left column with feature cards */}
              <div className="flex flex-col gap-6 w-[542px]">
                {featureCards.map((card, index) => (
                  <Card
                    key={index}
                    className="w-full h-[114px] bg-white rounded-lg border border-solid border-green-100 shadow-[0px_1px_2px_#0000000d]"
                  >
                    <CardContent className="p-0 relative h-full">
                      <img
                        className="absolute w-14 h-14 top-[29px] left-[21px]"
                        alt="Feature icon"
                        src={card.icon}
                      />
                      <div className="absolute w-[113px] h-7 top-7 left-[93px] [font-family:'Open_Sans',Helvetica] font-bold text-gray-800 text-[22px] tracking-[0] leading-7 whitespace-nowrap">
                        {card.title}
                      </div>
                      <div className="absolute h-6 top-[60px] left-[93px] [font-family:'Open_Sans',Helvetica] font-normal text-gray-600 text-lg tracking-[0] leading-6 whitespace-nowrap">
                        {card.title === "Sensors" && (
                          <>
                            <span>With </span>
                            <span className="font-semibold">10+ precision</span>
                            <span> sensors</span>
                          </>
                        )}
                        {card.title === "Research" && (
                          <>
                            <span>With </span>
                            <span className="font-semibold">
                              150+ Research parameters
                            </span>
                          </>
                        )}
                        {card.title === "Monitoring" && (
                          <>
                            <span>Our device monitors your crop </span>
                            <span className="font-semibold">24/7 </span>
                          </>
                        )}
                      </div>
                      <div
                        className={`absolute h-[65px] top-6 [font-family:'Open_Sans',Helvetica] font-semibold text-[#0f0f0f1c] text-5xl tracking-[0] leading-[normal] ${
                          card.number === "10+"
                            ? "left-[439px]"
                            : card.number === "150+"
                              ? "left-[412px]"
                              : "left-[420px]"
                        }`}
                      >
                        {card.number}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Call to action button */}
                <Button className="w-full h-[58px] mt-6 bg-[#006837] text-white rounded-lg hover:bg-[#005a2f]">
                  <div className="flex items-center justify-center gap-[19px] w-full">
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                      See What We Monitor
                    </span>
                    <img
                      className="w-[34px] h-[34px]"
                      alt="Play"
                      src={playIcon}
                    />
                  </div>
                </Button>
              </div>

              {/* Right column with image */}
              <div 
                className="w-[447px] h-[390px] bg-[#d9d9d9] rounded-lg bg-cover bg-center" 
                style={{
                  backgroundImage: `url(${header})`
                }}
              >
              </div>
            </div>

            {/* Footer text */}
            <div className="absolute h-[72px] bottom-[59px] left-[661px] [font-family:'Jost',Helvetica] font-medium italic text-[#4f4f4f] text-2xl text-center tracking-[0] leading-9">
              We helping you boost yields, reduce inputs
              <br />
              and grow smarter.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
