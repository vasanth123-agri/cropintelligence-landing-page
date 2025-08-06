  import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";


export const KnowledgeBaseSection = (): JSX.Element => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, windowHeight - rect.top);
      const visibleHeight = Math.min(visibleTop, sectionHeight);
      
      // Convert to progress (0 to 1)
      const progress = Math.min(1, Math.max(0, visibleHeight / (sectionHeight * 0.8)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12 sm:py-16 lg:py-20 bg-[#fbfbfb] px-4">
      <Card className="max-w-[95%] sm:max-w-[90%] lg:max-w-[1064px] mx-auto border-none bg-transparent">
        <CardContent className="p-0">
          <p className="font-['Open_Sans',Helvetica] text-sm sm:text-base md:text-xl lg:text-4xl leading-[1.3] sm:leading-[1.4] md:leading-[1.5] lg:leading-[56px] tracking-[0]">
            <span 
              style={{
                background: `linear-gradient(to right, #FFD700, #000000)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                opacity: Math.min(1, scrollProgress * 1.2),
                transition: 'opacity 0.8s ease-in-out'
              }}
            >
              You already know what to give your crops — we help you{" "}
            </span>
            <span 
              style={{
                background: `linear-gradient(to right, #FFD700, #000000)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                opacity: Math.min(1, Math.max(0, (scrollProgress - 0.3) * 1.4)),
                transition: 'opacity 0.8s ease-in-out'
              }}
            >
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
