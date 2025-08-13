import { ArrowRight } from "lucide-react";
import device from "../../../../assets/devic.jpeg"
export const FeatureHighlightSection = (): JSX.Element => {
  return (
    <section className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[750px] bg-white overflow-hidden">
      <div className="h-full relative">
        {/* Background GIF */}
        <img 
          src={device} 
          alt="Device background" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-35 md:bg-opacity-30"></div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center lg:items-start px-4 sm:px-6 md:px-8 lg:px-20">
          <div className="max-w-full sm:max-w-[90%] md:max-w-[600px] lg:max-w-[545px] space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-center lg:text-left">
            <h1 className="font-bold text-white text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.4] sm:leading-[1.4] md:leading-[1.4] lg:leading-[1.4] tracking-[-0.01em] sm:tracking-[-0.01em] md:tracking-[-0.01em] lg:tracking-[-0.02em]">
              <span className="block sm:inline">Introducing inputs at</span>
              <span className="block sm:inline"> </span>
              <span className="block sm:inline">Right time to get</span>
              <span className="block sm:inline"> </span>
              <span className="block sm:inline">yield More.</span>
            </h1>

            <div className="pt-2 sm:pt-4 md:pt-0 lg:pt-0 flex justify-center lg:justify-start">
              <button className="bg-[#006837] hover:bg-[#005a2f] text-white font-semibold px-5 sm:px-6 md:px-8 lg:px-[30px] py-3 sm:py-4 md:py-5 lg:py-5 rounded-lg sm:rounded-xl md:rounded-xl flex items-center gap-2 sm:gap-3 md:gap-5 lg:gap-5 transition-colors duration-200 shadow-lg hover:shadow-xl w-fit">
                <span className="text-[14px] sm:text-[16px] md:text-lg lg:text-xl leading-relaxed sm:leading-normal">Discover Optimal Timing Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};