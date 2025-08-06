import { ChevronRightIcon, MapPinIcon, PhoneIcon } from "lucide-react";


export const BackgroundSection = (): JSX.Element => {
  // Office information data
  const officeInfo = {
    title: "Our Office",
    address: ["Nava India Rd, near Radisson Blu,", "Coimbatore-04"],
    phone: "+91 63696 42480",
  };

  // Services data
  const services = {
    title: "Services",
    items: [
      "Crop Growth Tracking",
      "Financial Management",
      "Team Management",
      "Traceability",
      "All-in-1 Dashboard",
      "Iot Dashboard",
    ],
  };

  // Quick links data
  const quickLinks = {
    title: "Quick Links",
    items: [
      "About Us",
      "Contact Us",
      "Our Services",
      "Privacy Policy",
      "Terms & Conditions",
      "Cancellation And Refund Policy",
      "Shipping And Delivery Policy",
    ],
  };

  // Social media data
  const socials = {
    title: "Socials",
    items: ["Linkedin", "Instagram", "Whatsapp", "Email"],
  };

  return (
    <footer className="relative w-full bg-[#006837] py-24 mt-[80px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Our Office Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl text-white [font-family:'Jost',Helvetica]">
            {officeInfo.title}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPinIcon className="w-4 h-4 mt-1 text-[#e8f5e9]" />
              <div className="ml-4">
                {officeInfo.address.map((line, index) => (
                  <p
                    key={index}
                    className="text-[#e8f5e9] text-base [font-family:'Open_Sans',Helvetica]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-4 h-4 text-[#e8f5e9]" />
              <p className="ml-4 text-[#e8f5e9] text-base [font-family:'Open_Sans',Helvetica]">
                {officeInfo.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl text-white [font-family:'Jost',Helvetica]">
            {services.title}
          </h3>
          <ul className="space-y-3">
            {services.items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-[#e8f5e9]" />
                <span className="ml-4 text-[#e8f5e9] text-base [font-family:'Open_Sans',Helvetica]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl text-white [font-family:'Jost',Helvetica]">
            {quickLinks.title}
          </h3>
          <ul className="space-y-3">
            {quickLinks.items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-[#e8f5e9]" />
                <span className="ml-4 text-[#e8f5e9] text-base [font-family:'Open_Sans',Helvetica]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl text-white [font-family:'Jost',Helvetica]">
            {socials.title}
          </h3>
          <ul className="space-y-3">
            {socials.items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-[#e8f5e9]" />
                <span className="ml-4 text-[#e8f5e9] text-base [font-family:'Open_Sans',Helvetica]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
