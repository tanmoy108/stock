import React from "react";
import SideItem from "./SideItem";

const guestRoutes = [
  {
    icon: "/dashboard.svg",
    iconActive: "/dashboardAcitve.svg",
    label: "Dashboard",
    href: "/",
  },
  {
    icon: "/portfolio.svg",
    iconActive: "/portfolioAcitve.svg",
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    icon: "/market.svg",
    iconActive: "/marketAcitve.svg",
    label: "Trading & Market",
    href: "/page1",
  },
  {
    icon: "/wallet.svg",
    iconActive: "/walletActive.svg",
    label: "Research Portal",
    href: "/page2",
  }
];
const SidebarItems = () => {

  const routes = guestRoutes;
  return (
    <div className="flex flex-col">
      {routes.map((route, index) => (
        <SideItem
          key={index}
          icon={route.icon}
          iconActive={route.iconActive!}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarItems;
