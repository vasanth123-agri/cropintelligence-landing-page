import { FacebookIcon, MailIcon, PhoneIcon, TwitterIcon } from "lucide-react";

import { BackgroundSection } from "./sections/BackgroundSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { FeatureWrapperSection } from "./sections/FeatureWrapperSection";
import { InfoSection } from "./sections/InfoSection";
import { KnowledgeBaseSection } from "./sections/KnowledgeBaseSection";
import { NavigationSection } from "./sections/NavigationSection";
import { NextStepsSection } from "./sections/NextStepsSection";
import thickline from "../../assets/thickline.svg";

export const CropIntelligence = (): JSX.Element => {
  // Data for the announcement ticker
  

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-hidden w-full max-w-[1440px] relative">
        {/* Announcement Ticker */}
        

        {/* Contact Bar */}
        <div className="w-full h-[48px] sm:h-[52px] lg:h-[57px] bg-[#006837]">
          <div className="container mx-auto h-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 lg:gap-8">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#e8f5e9]" />
                <span className="font-['Open_Sans',Helvetica] font-normal text-white text-sm sm:text-base leading-5 sm:leading-6">
                  +91 63696 42480
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#e8f5e9]" />
                <span className="font-['Open_Sans',Helvetica] font-normal text-white text-xs sm:text-sm lg:text-base leading-4 sm:leading-5 lg:leading-6">
                  agriinversefarm@gmail.com
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-['Open_Sans',Helvetica] font-normal text-[#e8f5e9] text-sm lg:text-base leading-5 lg:leading-6">
                Follow Us:
              </span>
              <div className="w-8 h-8 lg:w-10 lg:h-[38px] rounded flex items-center justify-center">
                <FacebookIcon className="w-3 h-3 lg:w-3.5 lg:h-4 text-[#e8f5e9]" />
              </div>
              <div className="w-8 h-8 lg:w-10 lg:h-[38px] rounded flex items-center justify-center">
                <TwitterIcon className="w-3 h-3 lg:w-3.5 lg:h-4 text-[#e8f5e9]" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <NavigationSection />

        {/* Feature Highlight Section */}
        <div className="mb-8 sm:mb-12 lg:mb-12">
          <FeatureHighlightSection />
        </div>

        {/* Knowledge Base Section */}
        <KnowledgeBaseSection />
        
        {/* Thick line */}
        <div className="mb-8 sm:mb-12 lg:mb-12">
          <img className="block w-full h-[80px] object-cover" alt="Frame" src={thickline} />
        </div>

        {/* Feature Wrapper Section (handles its own top/bottom spacing) */}
        <FeatureWrapperSection />

        {/* Content Wrapper Section */}
        <div className="mb-8 sm:mb-12 lg:mb-12 lg:mt-16">
          <ContentWrapperSection />
        </div>

        {/* Next Steps Section with Background */}
        <div className="relative w-full mb-8 sm:mb-12 lg:mb-12">
          <div className="absolute w-[466px] h-[466px] top-[472px] left-0 bg-[#0068378c] rounded-[233px] blur-[525px]" />
          <NextStepsSection />
        </div>

        {/* Next Steps Heading */}
        <div className="w-full text-center mt-8 lg:mt-12 mb-6 sm:mb-8 lg:mb-10">
          <h2 className="font-['Jost',Helvetica] font-medium text-black text-2xl sm:text-3xl lg:text-4xl leading-[1.4] sm:leading-[1.5] lg:leading-[56px] px-4 lg:px-0 lg:mt-[120px]">
            Your Next Step
          </h2>
          <p className="font-['Jost',Helvetica] font-medium italic text-[#6d6d6d] text-lg sm:text-xl lg:text-2xl leading-[1.4] sm:leading-[1.5] lg:leading-[56px] px-4 lg:px-0">
            Join group of farmers already using smart timing to increase profits
          </p>
        </div>

        {/* Info Section */}
        <div className="mb-8 sm:mb-8 lg:mb-24">
          <InfoSection />
        </div>

        {/* Call To Action Section */}
        <div className="mb-8 sm:mb-12 lg:mb-12 flex justify-center items-center">
          <CallToActionSection />
        </div>

        {/* Background Section */}
        <div className="lg:mt-[120px] ">
           <BackgroundSection />
        </div>
       
      </div>
    </div>
  );
};
