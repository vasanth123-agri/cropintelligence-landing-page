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

  // --- FIX 1: Updated data structure to include 'label' and 'href' for links ---
  // Quick links data
  const quickLinks = {
    title: "Quick Links",
    items: [
      { label: "About Us", href: "https://agriinverse.in/about.html" },
      { label: "Contact Us", href: "https://agriinverse.in/contact.html" },
      { label: "Our Services", href: "https://agriinverse.in/service.html" },
      { label: "Privacy Policy", href:"https://agriinverse.in/privacypolicy.html" },
      { label: "Terms & Conditions", href: "https://agriinverse.in/TermsandConditions.html" },
      { label: "Cancellation And Refund Policy", href: "https://agriinverse.in/Cancellation.html" },
      { label: "Shipping And Delivery Policy", href: "https://agriinverse.in/shipping.html" },
    ],
  };

  // Social media data
  const socials = {
    title: "Socials",
    items: [  
      { label: "Linkedin", href: "https://www.linkedin.com/company/agriinverse/" },
      { label: "Instagram", href: "https://www.instagram.com/agriinverse/" },
      { label: "Whatsapp", href: "https://wa.me/9080314168" },
      { label: "Email", href: "mailto:contact@agriinverse.in" },
    ],
  };

  return (
    <footer className="relative w-full bg-[#006837] py-24 lg:mt-[64px] sm:mt-[48px] md:mt-[56px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Our Office Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl text-white [font-family:'Jost',Helvetica]">
            {officeInfo.title}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPinIcon className="w-4 h-4 mt-1 text-[#e8f5e9] flex-shrink-0" />
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
              <PhoneIcon className="w-4 h-4 text-[#e8f5e9] flex-shrink-0" />
              <a href={`tel:${officeInfo.phone}`} className="ml-4 text-[#e8f5e9] text-base [font-family:'Open_Sans',Helvetica] hover:text-white transition-colors">
                {officeInfo.phone}
              </a>
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
            {/* --- FIX 2: Mapped items to render anchor <a> tags --- */}
            {quickLinks.items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-[#e8f5e9]" />
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-[#e8f5e9] text-base [font-family:'Open_Sans',Helvetica] hover:text-white transition-colors"
                >
                  {item.label}
                </a>
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
            {/* --- FIX 3: Mapped items to render anchor <a> tags --- */}
            {socials.items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-[#e8f5e9]" />
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-[#e8f5e9] text-base [font-family:'Open_Sans',Helvetica] hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};