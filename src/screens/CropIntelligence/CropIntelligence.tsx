import { FacebookIcon, MailIcon, PhoneIcon, TwitterIcon } from "lucide-react";
import React from "react";
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
  const announcements = [
    "Join our 1-Day Indoor Farming Course on Jan 15!",
    "🌱",
    "WhatsApp +91 63696 42480 for details.",
    "🌱",
    "Join our 1-Day Indoor Farming Course on Jan 15!",
    "🌱",
    "WhatsApp +91 63696 42480 for details.",
  ];

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-hidden w-full max-w-[1440px] relative">
        {/* Announcement Ticker */}
        <div className="w-full h-[42px] bg-[#2a8158] overflow-hidden">
          <div className="flex items-center gap-10 py-[9px] px-4 animate-marquee">
            {announcements.map((announcement, index) => (
              <div
                key={`announcement-${index}`}
                className="text-white text-base leading-6 whitespace-nowrap font-['Open_Sans',Helvetica] font-normal"
              >
                {announcement}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Bar */}
        <div className="w-full h-[57px] bg-[#006837]">
          <div className="container mx-auto h-full flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#e8f5e9]" />
                <span className="font-['Open_Sans',Helvetica] font-normal text-white text-base leading-6">
                  +91 63696 42480
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-[#e8f5e9]" />
                <span className="font-['Open_Sans',Helvetica] font-normal text-white text-base leading-6">
                  agriinversefarm@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-['Open_Sans',Helvetica] font-normal text-[#e8f5e9] text-base leading-6">
                Follow Us:
              </span>
              <div className="w-10 h-[38px] rounded flex items-center justify-center">
                <FacebookIcon className="w-3.5 h-4 text-[#e8f5e9]" />
              </div>
              <div className="w-10 h-[38px] rounded flex items-center justify-center">
                <TwitterIcon className="w-3.5 h-4 text-[#e8f5e9]" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <NavigationSection />

        {/* Feature Highlight Section */}
        <FeatureHighlightSection />

        {/* Divider */}
       

        {/* Knowledge Base Section */}
        <KnowledgeBaseSection />
         <img className="w-full h-[84px]" alt="Frame" src={thickline} />

        {/* Feature Wrapper Section */}
        <FeatureWrapperSection />

        {/* Content Wrapper Section */}
        <ContentWrapperSection />

        {/* Next Steps Section with Background */}
        <div className="relative w-full">
          <div className="absolute w-[466px] h-[466px] top-[472px] left-0 bg-[#0068378c] rounded-[233px] blur-[525px]" />
          <NextStepsSection />
        </div>

        {/* Next Steps Heading */}
        <div className="w-full text-center mt-16 mb-2">
          <h2 className="font-['Jost',Helvetica] font-medium text-black text-4xl leading-[56px]">
            Your Next Step
          </h2>
          <p className="font-['Jost',Helvetica] font-medium italic text-[#6d6d6d] text-2xl leading-[56px]">
            Join group of farmers already using smart timing to increase profits
          </p>
        </div>

        {/* Info Section */}
        <InfoSection />

        {/* Call To Action Section */}
        <CallToActionSection />

        {/* Background Section */}
        <BackgroundSection />
      </div>
    </div>
  );
};
