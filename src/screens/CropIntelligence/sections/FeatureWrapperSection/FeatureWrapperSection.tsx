import { Card, CardContent } from "../../../../components/ui/card";
import plantone from "../../../../assets/plantone.svg";
export const FeatureWrapperSection = (): JSX.Element => {
  // Data for the comparison cards
  const comparisonData = [
    {
      title: "Without Proper Intelligence",
      bgColor: "bg-[#fcfcdf]",
      content: (
        <div 
          className="relative w-full h-[380px] sm:h-[430px] lg:h-[520px] bg-cover bg-center" 
          style={{
            backgroundImage: `url(${plantone})`
          }}
        />
      ),
    },
    {
      title: "With Proper Intelligence",
      bgColor: "bg-[#fcfcff]",
      content: (
        <div className="relative w-full h-[380px] sm:h-[430px] lg:h-[520px] pt-[20px] sm:pt-[30px] lg:pt-[47px] px-[20px] sm:px-[25px] lg:px-[31px]">
          <img
            className="w-full h-[340px] sm:h-[380px] lg:h-[447px] object-cover"
            alt="Untitled project"
            src={plantone}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full mx-auto py-8 sm:py-12 lg:py-16 px-4">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl text-[#331818] [font-family:'Jost',Helvetica] leading-[1.4] sm:leading-[1.5] lg:leading-[56px] mb-2">
          Timing Makes the Difference
        </h2>
        <p className="font-medium italic text-lg sm:text-xl lg:text-2xl text-[#6d6d6d] [font-family:'Jost',Helvetica] leading-[1.4] sm:leading-[1.5] lg:leading-[56px]">
          For Profit and Productivity
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-8 justify-center items-center xl:items-start">
        {comparisonData.map((item, index) => (
          <Card
            key={index}
            className={`w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] xl:w-[500px] h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[579px] overflow-hidden rounded-xl border-2 border-solid border-[#e1e1e1] ${item.bgColor} flex-shrink-0`}
          >
            <CardContent className="p-0">
              <div className="relative w-full h-full">
                <h3 className="absolute top-[15px] sm:top-[18px] lg:top-[21px] left-1/2 transform -translate-x-1/2 font-medium text-lg sm:text-xl lg:text-2xl text-[#331818] [font-family:'Jost',Helvetica] leading-[1.4] lg:leading-[56px] whitespace-nowrap z-10 px-4">
                  {item.title}
                </h3>
                <div className="mt-[50px] sm:mt-[55px] lg:mt-[60px] px-3 sm:px-4 lg:px-0">
                  {item.content}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
