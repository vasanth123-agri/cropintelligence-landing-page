import { ArrowRight } from "lucide-react";
import header from "../../../../assets/header.svg";

export const FeatureHighlightSection = (): JSX.Element => {
  return (
    <section className="w-full h-[750px] bg-white overflow-hidden">
      <div className="h-full">
        <div 
          className="relative w-full h-[750px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${header})`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="relative z-10 absolute w-full max-w-[545px] top-[75px] left-20 font-bold text-white text-[40px] leading-[70px]">
            Introducing inputs at Right time to get yield More.
          </div>

          <button className="relative z-10 absolute top-[238px] left-20 bg-[#006837] hover:bg-[#005a2f] text-white text-2xl font-semibold px-[30px] py-5 rounded-xl flex items-center gap-5 transition-colors duration-200 shadow-lg hover:shadow-xl">
            <span>Discover Optimal Timing Now</span>
            <ArrowRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};