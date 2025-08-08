import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <Card className="max-w-[1280px] rounded-xl overflow-hidden border border-solid border-[#edf4f1] shadow-[2px_2px_60px_4px_#0037141c] bg-white mx-auto">
      <CardContent className="flex flex-col items-center justify-center lg:pt-8 lg:pb-12 md:py-10 py-8 lg:px-6 md:px-5 px-4">
        <h2 className="lg:text-[40px] md:text-[32px] text-[28px] font-bold text-[#006837] text-center lg:leading-[58px] md:leading-[46px] leading-[40px] [font-family:'Jost',Helvetica] mb-3">
          Don&apos;t leave your farm&apos;s success to guesswork,
        </h2>

        <h3 className="lg:text-[28px] md:text-[22px] text-[18px] font-semibold text-[#006837] text-center lg:leading-[46px] md:leading-[36px] leading-[28px] [font-family:'Open_Sans',Helvetica] lg:mb-8 md:mb-6 mb-5">
          See the difference precise timing can make.
        </h3>

        <div className="relative lg:w-[484px] md:w-[400px] w-full max-w-[350px] lg:mb-8 md:mb-6 mb-5">
          <Button className="w-full lg:h-[60px] md:h-[52px] h-[48px] bg-[#006837] hover:bg-[#006837]/90 rounded-lg lg:text-xl md:text-lg text-base font-bold [font-family:'Open_Sans',Helvetica] shadow-lg hover:shadow-xl transition-all duration-300">
            Book Yours Now
          </Button>

          <Badge className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0 -top-1 -right-1 bg-[#ffa04e] hover:bg-[#ffa04e] rounded-[0px_8px_0px_8px] lg:text-xs md:text-xs text-[10px] font-bold [font-family:'Open_Sans',Helvetica] lg:py-2.5 lg:px-2.5 md:py-2 md:px-2 py-1.5 px-1.5">
            * 3 Waiting
          </Badge>
        </div>

        <p className="lg:text-xl md:text-lg text-base text-center lg:leading-8 md:leading-7 leading-6 lg:max-w-[868px] md:max-w-[600px] max-w-[320px] [font-family:'Open_Sans',Helvetica] lg:px-0 md:px-4 px-2">
          <span className="text-[#424242]">We provide</span>
          <span className="font-semibold text-[#006837]">&nbsp;</span>
          <span className="font-bold text-[#006837]">free 7 days demo</span>
          <span className="font-semibold text-[#006837]">&nbsp;</span>
          <span className="text-[#424242]">
            of our device in your farm, See how fellow farmers like you made use
            of our device.
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
