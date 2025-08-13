import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../../../../assets/Agri Inverse Logo.svg"

export const NavigationSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items data
  const navItems = [
    { label: "Home", width: "w-[52px]" },
    { label: "About", width: "w-[52px]" },
    { label: "Services", width: "w-[70px]" },
    { label: "Portfolio", width: "w-[74px]" },
    { label: "Contact", width: "w-[66px]" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[85px] bg-white flex items-center justify-between px-4 sm:px-8 lg:px-20
     relative">
      {/* Logo */}
      <div className="w-[120px] h-[60px] sm:w-[140px] sm:h-[70px] lg:w-[168px] lg:h-[85px] bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url(${logo})` }} />

      {/* Desktop Navigation - Hidden on mobile/tablet */}
      <div className="hidden lg:flex items-center gap-9">
        <nav className="flex gap-9">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
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
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Login Button */}
            <div className="px-6 py-3">
              <Button className="w-full h-10 bg-[#006837] rounded text-white text-base font-['Open_Sans',Helvetica] font-normal hover:bg-[#005a2f]">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
