import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../../../../assets/Agri Inverse Logo.svg";

export const NavigationSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- FIX 1: Standardized 'onClick' property and added handler for 'Home' ---
  // Navigation items data
  const navItems = [
    {
      label: "Home",
      width: "w-[52px]",
      onClick: () => (window.location.href = "https://agriinverse.in/"),
    },
    {
      label: "About",
      width: "w-[52px]",
      onClick: () => window.open("https://agriinverse.in/"),
    },
    {
      label: "Services",
      width: "w-[70px]",
      onClick: () => window.open("https://agriinverse.in/service.html"),
    },
    {
      label: "Portfolio",
      width: "w-[74px]",
      onClick: () => window.open("https://agriinverse.in/product.html"),
    },
    {
      label: "Contact",
      width: "w-[66px]",
      onClick: () => window.open("https://agriinverse.in/contact.html"),
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // A helper function to handle link clicks
  const handleLinkClick = (itemOnClick?: () => void) => {
    if (itemOnClick) {
        itemOnClick();
    }
    setIsMenuOpen(false); // Always close menu on link click
  };


  return (
    <header className="w-full h-[85px] bg-white flex items-center justify-between px-4 sm:px-8 lg:px-20 relative">
      {/* Logo */}
      <div
        className="w-[120px] h-[60px] sm:w-[140px] sm:h-[70px] lg:w-[168px] lg:h-[85px] bg-cover bg-center flex-shrink-0 cursor-pointer"
        style={{ backgroundImage: `url(${logo})` }}
        onClick={() => (window.location.href = "https://agriinverse.in/")}
      />

      {/* Desktop Navigation - Hidden on mobile/tablet */}
      <div className="hidden lg:flex items-center gap-9">
        <nav className="flex gap-9">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              // --- FIX 2: Added the onClick handler for desktop links ---
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleLinkClick(item.onClick)
              }}
              className={`${item.width} h-6 font-['Open_Sans',Helvetica] font-normal text-[#0f4229] text-lg tracking-[0] leading-[27px] whitespace-nowrap cursor-pointer hover:text-[#006837] transition-colors flex items-center`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Login Button */}
        <Button className="w-[73px] h-10 bg-[#006837] rounded text-white text-base font-['Open_Sans',Helvetica] font-normal hover:bg-[#005a2f]">
          Login
        </Button>
      </div>

      {/* Mobile/Tablet Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-[#0f4229] hover:text-[#006837] transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="flex flex-col py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="px-6 py-3 font-['Open_Sans',Helvetica] font-normal text-[#0f4229] text-lg hover:text-[#006837] hover:bg-gray-50 transition-colors"
                // --- FIX 3: Updated onClick to perform navigation AND close the menu ---
                onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleLinkClick(item.onClick);
                }}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Login Button */}
            
          </div>
        </div>
      )}
    </header>
  );
};