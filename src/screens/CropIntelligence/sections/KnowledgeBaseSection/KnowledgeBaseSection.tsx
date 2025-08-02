import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";


export const KnowledgeBaseSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-[#fbfbfb]">
      <Card className="max-w-[1064px] mx-auto border-none bg-transparent">
        <CardContent className="p-0">
          <p className="font-['Open_Sans',Helvetica] text-4xl leading-[56px] tracking-[0]">
            <span className="text-[#331818]">
              You already know what to give your crops — we help you{" "}
            </span>
            <span className="text-[#33181863]">
              apply it when and how much they can use it at most, so you save on
              fertilizer, water and grow higher yields. All this without
              guesswork — just real-time precision tailored to your farm&apos;s
              needs.
            </span>
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
