import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { label: "Home", width: "w-[52px]" },
    { label: "About", width: "w-[52px]" },
    { label: "Services", width: "w-[70px]" },
    { label: "Portfolio", width: "w-[74px]" },
    { label: "Contact", width: "w-[66px]" },
  ];

  return (
    <header className="w-full h-[85px] bg-white flex items-center justify-between px-20">
      {/* Logo */}
      <div className="w-[168px] h-[85px] bg-[url(/agri-inverse-logo.png)] bg-cover bg-[50%_50%]" />

      {/* Navigation */}
      <div className="flex items-center gap-9">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-9">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`${item.width} h-6 font-['Open_Sans',Helvetica] font-normal text-[#0f4229] text-lg tracking-[0] leading-[27px] whitespace-nowrap`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Login Button */}
        <Button className="w-[73px] h-10 bg-[#006837] rounded text-white text-base font-['Open_Sans',Helvetica] font-normal">
          Login
        </Button>
      </div>
    </header>
  );
};
