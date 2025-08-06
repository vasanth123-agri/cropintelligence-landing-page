import { ArrowRight } from "lucide-react";

import device from "../../../../assets/device.gif"
export const FeatureHighlightSection = (): JSX.Element => {
  return (
    <section className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] bg-white overflow-hidden">
      <div className="h-full">
        <div 
          className="relative w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${device})`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="relative z-10 absolute w-full max-w-[95%] sm:max-w-[80%] md:max-w-[600px] lg:max-w-[545px] top-[30px] sm:top-[50px] md:top-[65px] lg:top-[75px] left-2 sm:left-4 md:left-8 lg:left-20 font-bold text-white text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] leading-[1.3] sm:leading-[1.4] md:leading-[1.5] lg:leading-[70px]">
            Introducing inputs at Right time to get yield More.
          </div>

          <button className="relative z-10 absolute top-[140px] sm:top-[160px] md:top-[200px] lg:top-[128px] left-2 sm:left-4 md:left-8 lg:left-20 bg-[#006837] hover:bg-[#005a2f] text-white font-semibold px-3 sm:px-4 md:px-6 lg:px-[30px] py-2 sm:py-3 md:py-4 lg:py-5 rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 transition-colors duration-200 shadow-lg hover:shadow-xl max-w-[95%] sm:max-w-none">
            <span className="text-xs sm:text-sm md:text-base lg:text-xl whitespace-nowrap">Discover Optimal Timing Now</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 flex-shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};