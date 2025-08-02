import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <Card className="w-full rounded-xl overflow-hidden border border-solid border-[#edf4f1] shadow-[2px_2px_60px_4px_#0037141c] bg-white">
      <CardContent className="flex flex-col items-center justify-center py-14 px-6">
        <h2 className="text-[40px] font-bold text-[#006837] text-center leading-[58px] [font-family:'Jost',Helvetica] mb-3">
          Don&apos;t leave your farm&apos;s success to guesswork,
        </h2>

        <h3 className="text-[28px] font-semibold text-[#006837] text-center leading-[46px] [font-family:'Open_Sans',Helvetica] mb-8">
          See the difference precise timing can make.
        </h3>

        <div className="relative w-[484px] mb-8">
          <Button className="w-full h-[60px] bg-[#006837] hover:bg-[#006837]/90 rounded-lg text-xl font-bold [font-family:'Open_Sans',Helvetica]">
            Book Yours Now
          </Button>

          <Badge className="absolute top-0 right-0 bg-[#ffa04e] hover:bg-[#ffa04e] rounded-[0px_8px_0px_8px] text-xs font-bold [font-family:'Open_Sans',Helvetica] py-2.5 px-2.5">
            * 3 Waiting
          </Badge>
        </div>

        <p className="text-xl text-center leading-8 max-w-[868px] [font-family:'Open_Sans',Helvetica]">
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
