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
          className="relative w-full h-[574px] bg-cover bg-center" 
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
        <div className="relative w-full h-[554px] pt-[47px] px-[31px]">
          <img
            className="w-full h-[447px] object-cover mt-[20px]"
            alt="Untitled project"
            src={plantone}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="font-medium text-4xl text-[#331818] [font-family:'Jost',Helvetica] leading-[56px] mb-2">
          Timing Makes the Difference
        </h2>
        <p className="font-medium italic text-2xl text-[#6d6d6d] [font-family:'Jost',Helvetica] leading-[56px]">
          For Profit and Productivity
        </p>
      </div>

      <div className="flex flex-row gap-8 justify-center items-start overflow-x-auto">
        {comparisonData.map((item, index) => (
          <Card
            key={index}
            className={`w-[500px] h-[579px] overflow-hidden rounded-xl border-2 border-solid border-[#e1e1e1] ${item.bgColor} flex-shrink-0`}
          >
            <CardContent className="p-0">
              <div className="relative w-full h-full">
                <h3 className="absolute top-[21px] left-1/2 transform -translate-x-1/2 font-medium text-2xl text-[#331818] [font-family:'Jost',Helvetica] leading-[56px] whitespace-nowrap">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
