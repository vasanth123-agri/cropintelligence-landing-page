import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import agribot from "../../../../assets/AgriBot.jpg"
import icontwo from "../../../../assets/icontwo.svg"
import iconthree from "../../../../assets/iconthree.svg"
import iconone from "../../../../assets/iconone.svg";
import play from "../../../../assets/Play.svg"
import chatlogo from "../../../../assets/chatlogo.svg";
import chatboticon from "../../../../assets/chatboticon.svg";
import chatbackbutton from "../../../../assets/chatbackbutton.svg";
import chatmail from "../../../../assets/chatmail.svg";
import chatprofile from "../../../../assets/chatprofile.svg";
import chaticonone from "../../../../assets/chaticonone.svg";
import chaticontwo from "../../../../assets/chaticontwo.svg";
import chaticondownload from "../../../../assets/chaticondownload.svg"
export const ContentWrapperSection = (): JSX.Element => {
  // Feature data for the left side
  const features = [
    {
      icon: iconone,
      title: "Ask Anything, Anytime",
      description:
        "Get instant answers about irrigation timing, fertilizer amounts, and weather impacts on your crops.",
    },
    {
      icon: icontwo,
      title: "Real-Time Recommendations",
      description:
        "Receive personalized advice based on live sensor data from your specific fields.",
    },
    {
      icon: iconthree,
      title: "Expert Knowledge",
      description:
        "Access insights from agricultural experts and successful farming practices worldwide.",
    },
  ];

  // Chat suggestion buttons data
  const topSuggestions = [
    "Billing & Plans",
    "Devices & Connectivity",
    "Farm Tips",
  ];

  const middleSuggestions = ["My Subscription Info", "Employee Payroll"];

  const bottomSuggestions = [
    "View salary summary",
    "How is seasonal worker pay calculated?",
    "Difference between hourly and piece rate",
    "Payroll report for this month",
  ];

  const payslipSuggestions = ["Download Payslip", "View Detailed Breakdown"];

  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-20 bg-[#006837] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white text-center mb-8 sm:mb-10 lg:mb-12 font-['Jost',Helvetica]">
        Your Personal Farm Assistant
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left side - Features */}
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12 w-full lg:w-1/2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                  alt="Feature icon"
                  src={feature.icon}
                />
                <h3 className="font-bold text-white text-lg sm:text-xl lg:text-[22px] leading-6 sm:leading-7 font-['Open_Sans',Helvetica]">
                  {feature.title}
                </h3>
              </div>
              <p className="ml-9 sm:ml-11 lg:ml-12 mt-2 sm:mt-3 text-[#e9e9e9] text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 font-['Open_Sans',Helvetica] font-normal">
                {feature.description}
              </p>
            </div>
          ))}

          <Button
            variant="default"
            className="flex items-center gap-3 sm:gap-4 lg:gap-[19px] bg-white text-[#006837] rounded-lg w-fit px-4 sm:px-5 py-3 sm:py-4 mt-6 sm:mt-7 lg:mt-8"
          >
            <span className="font-semibold text-sm sm:text-base font-['Open_Sans',Helvetica]">
              See How Farmers Use the AI Chatbot
            </span>
            <div className="flex w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] lg:w-[34px] lg:h-[34px] items-center justify-center bg-[#006837] rounded-[14px] sm:rounded-[15px] lg:rounded-[17px]">
              <img
                className="w-[9px] h-[10px] sm:w-[10px] sm:h-[11px] lg:w-[11px] lg:h-[12.4px]"
                alt="Play button"
                src={play}
              />
            </div>
          </Button>
        </div>

        {/* Right side - Chat interface */}
        <Card className="w-full lg:w-[558px] h-[400px] sm:h-[440px] lg:h-[480px] bg-[#f1f4f3] rounded-xl lg:rounded-2xl border-2 border-solid border-[#dce4e2] overflow-hidden mx-auto lg:mx-0">
          <CardContent className="p-0 h-full">
            {/* Chat header */}
            <div className="w-full h-[60px] sm:h-[65px] lg:h-[69px] bg-[#e7f2ee] flex items-center px-4 sm:px-6">
              <div className="relative flex-1 h-[30px] sm:h-[35px] lg:h-[37px]">
                <img src = {chatlogo} className="h-full object-contain"/>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <img src={chatmail} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                <img src={chatprofile} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>

            {/* Chat content */}
            <ScrollArea className="h-[340px] sm:h-[375px] lg:h-[411px]">
              <div className="p-3 sm:p-4 lg:p-6">
                {/* Bot intro */}
                <div className="flex items-center gap-[17.87px] mb-6">
                  <img
                    className="w-[35.74px] h-[35.74px]"
                    alt="Agribot avatar"
                    src= {chatbackbutton}
                  />
                  <div className="bg-[linear-gradient(143deg,rgba(37,42,42,1)_27%,rgba(0,0,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Urbanist',Helvetica] font-semibold text-[17.9px] leading-[11.1px]">
                    Agribot
                  </div>
                </div>

                {/* Bot welcome */}
                <div className="flex justify-center mb-8">
                  <div className="w-28 flex flex-col items-center">
                    <img
                      className="w-28 h-28 mb-6"
                      alt="Bot icon"
                      src= {chatboticon}
                    />
                    <div className="bg-[#f2f5f4] px-[22.34px] py-[14.89px] rounded-[22.34px] border-[0.74px] border-solid border-[#dce4e2]">
                      <div className="font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[23.8px] text-center leading-[14.9px]">
                        Hello !
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suggestion buttons */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {topSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="bg-[#f2f5f4] rounded-[22.34px] border-[0.74px] border-solid border-[#dce4e2] px-[14.89px] py-[11.91px] h-auto"
                      >
                        <span className="font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[14.9px] leading-[14.9px]">
                          {suggestion}
                        </span>
                      </Button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {middleSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="bg-[#f2f5f4] rounded-[22.34px] border-[0.74px] border-solid border-[#dce4e2] px-[14.89px] py-[11.91px] h-auto"
                      >
                        <span className="font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[14.9px] leading-[14.9px]">
                          {suggestion}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end mb-4">
                  <div className="relative max-w-[162px]">
                    <div className="bg-white px-[44.68px] py-[16.38px] rounded-[8.94px_8.94px_1.49px_8.94px]">
                      <div className="font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[14.9px] text-right leading-[14.9px]">
                        Hello there
                      </div>
                    </div>
                    <div className="absolute top-[31px] right-[12px] font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[7.4px] text-right leading-[14.9px]">
                      2:30 PM
                    </div>
                  </div>
                </div>

                {/* Bot response */}
                <div className="mb-4">
                  <div className="relative max-w-[284px]">
                    <div className="bg-[#184d49] p-[16.38px] rounded-[8.94px_8.94px_8.94px_1.49px]">
                      <div className="font-['Urbanist',Helvetica] font-semibold text-white text-[14.9px] leading-[20.8px]">
                        Alright! Here are a few things I can help with payroll
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-2 top-[11px] right-[-32px]">
                      <img
                        className="w-[17px] h-[17px]"
                        alt="Copy"
                        src="/prime-copy-2.svg"
                      />
                      <img
                        className="w-[17px] h-[17px]"
                        alt="Share"
                        src="/tdesign-share.svg"
                      />
                    </div>
                    <div className="absolute top-[51px] right-[-46px] font-['Urbanist',Helvetica] font-semibold text-[#f8f8f8] text-[7.4px] text-right leading-[14.9px]">
                      2:30 PM
                    </div>
                  </div>
                </div>

                {/* Suggestion buttons */}
                <div className="mb-8">
                  {bottomSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="bg-[#f2f5f4] rounded-[22.34px] border-[0.74px] border-solid border-[#dce4e2] px-[14.89px] py-[11.91px] h-auto mb-2 mr-2"
                    >
                      <span className="font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[14.9px] text-center leading-[14.9px]">
                        {suggestion}
                      </span>
                    </Button>
                  ))}
                </div>

                {/* User message - View salary */}
                <div className="flex justify-end mb-4">
                  <div className="relative max-w-[234px]">
                    <div className="bg-white px-[44.68px] py-[16.38px] rounded-[8.94px_8.94px_1.49px_8.94px]">
                      <div className="font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[14.9px] text-right leading-[14.9px]">
                        View salary summary
                      </div>
                    </div>
                    <div className="absolute top-[31px] right-[8px] font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[7.4px] text-right leading-[14.9px]">
                      2:31 PM
                    </div>
                  </div>
                </div>

                {/* Bot response - Salary summary */}
                <div className="mb-4">
                  <div className="relative max-w-[354px]">
                    <div className="bg-[#184d49] p-[16.38px] rounded-[8.94px_8.94px_8.94px_1.49px]">
                      <div className="font-['Urbanist',Helvetica] font-semibold text-white text-[14.9px] leading-[20.8px]">
                        Sure! Here's a quick summary of your salary for this
                        month. Your base pay stands at ₹25,000. You've earned an
                        additional ₹2,000 in incentives, and there's a deduction
                        of ₹500 due to late attendance. That brings your total
                        net pay to ₹26,500. Let me know if you'd like a detailed
                        breakdown or to download your payslip.
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-2 top-[12px] right-[-32px]">
                      <img
                        className="w-[15px] h-[15px]"
                        alt="Copy"
                        src={chaticonone}
                      />
                      <img
                        className="w-[15px] h-[15px] mt-2"
                        alt="Share"
                        src={chaticontwo}
                      />
                    </div>
                    <div className="absolute top-[176px] right-[-8px] font-['Urbanist',Helvetica] font-semibold text-[#f8f8f8] text-[7.4px] text-right leading-[14.9px]">
                      2:32 PM
                    </div>
                  </div>
                </div>

                {/* Payslip suggestion buttons */}
                <div className="mb-8">
                  {payslipSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="bg-[#f2f5f4] rounded-[22.34px] border-[0.74px] border-solid border-[#dce4e2] px-[14.89px] py-[11.91px] h-auto mb-2 mr-2"
                    >
                      <span className="font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[14.9px] text-center leading-[14.9px]">
                        {suggestion}
                      </span>
                    </Button>
                  ))}
                </div>

                {/* User message - Download payslip */}
                <div className="flex justify-end mb-4">
                  <div className="relative max-w-[207px]">
                    <div className="bg-white px-[44.68px] py-[16.38px] rounded-[8.94px_8.94px_1.49px_8.94px]">
                      <div className="font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[14.9px] text-right leading-[14.9px]">
                        Download Payslip
                      </div>
                    </div>
                    <div className="absolute top-[31px] right-[8px] font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[7.4px] text-right leading-[14.9px]">
                      2:32 PM
                    </div>
                  </div>
                </div>

                {/* Bot response - Payslip */}
                <div className="mb-4">
                  <div className="relative max-w-[354px]">
                    <div className="bg-[#184d49] p-[16.38px] rounded-[8.94px_8.94px_8.94px_1.49px]">
                      <div className="font-['Urbanist',Helvetica] font-semibold text-white text-[14.9px] leading-[20.8px]">
                        Here you go! Tap below to download your payslip for
                        April.
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-2 top-[12px] right-[-32px]">
                      <img
                        className="w-[15px] h-[15px]"
                        alt="Copy"
                        src={chaticonone}
                      />
                      <img
                        className="w-[15px] h-[15px] mt-2"
                        alt="Share"
                        src={chaticontwo}
                      />
                    </div>
                    <div className="absolute top-[51px] right-[-8px] font-['Urbanist',Helvetica] font-semibold text-[#f8f8f8] text-[7.4px] text-right leading-[14.9px]">
                      2:33 PM
                    </div>
                  </div>
                </div>

                {/* Download button */}
                <Button
                  variant="outline"
                  className="bg-[#f2f5f4] rounded-[22.34px] border-[0.74px] border-solid border-[#dce4e2] px-[14.89px] py-[11.91px] h-auto flex items-center gap-2"
                >
                  <span className="font-['Urbanist',Helvetica] font-semibold text-[#7d7d7d] text-[14.9px] text-center leading-[14.9px]">
                    April Payslip
                  </span>
                  <img
                    className="w-[17.87px] h-[17.87px]"
                    alt="Download"
                    src={chaticondownload}
                  />
                </Button>
              </div>
            </ScrollArea>

            {/* Chat input */}
            <div className="w-full h-[60px] sm:h-[65px] lg:h-[71px] bg-[#f1f4f3] border-t-[0.74px] border-[#dce4e2] shadow-[inset_0px_1.49px_1.49px_#0000000d] p-3 sm:p-4 lg:p-[15px]">
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="flex-1 h-[36px] sm:h-[38px] lg:h-[42px] bg-[#dce4e2] rounded-[5px] sm:rounded-[5.5px] lg:rounded-[5.96px] px-3 sm:px-4 lg:px-[15px] flex items-center">
                  <span className="font-['Urbanist',Helvetica] font-medium text-[#7d7d7d] text-xs sm:text-sm lg:text-[14.9px]">
                    Hello there 👋!
                  </span>
                </div>
                <img
                  className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] lg:w-[42px] lg:h-[42px]"
                  alt="Send button"
                  src="/group-1410084470.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
