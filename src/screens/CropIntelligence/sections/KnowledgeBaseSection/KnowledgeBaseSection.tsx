import { useEffect, useRef, useState } from "react";


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
    <section ref={sectionRef} className="w-full pt-8 pb-8 md:pt-12 md:pb-12 lg:pt-24 lg:pb-24 px-6 md:px-8 lg:px-4">
      <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[1064px] mx-auto">
        <div className="px-2 md:px-4 lg:px-0">
          <p className="font-['Open_Sans',Helvetica] text-2xl md:text-3xl lg:text-4xl leading-[1.4] md:leading-[1.5] lg:leading-[56px] tracking-[0] text-left">
            <span 
              className="inline whitespace-normal break-words"
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
              className="inline whitespace-normal break-words"
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
        </div>
      </div>
    </section>
  );
};
