import React from "react";
import SideItem from "./SideItem";

const guestRoutes = [
  {
    icon: "/dashboard.svg",
    label: "Dashboard",
    href: "/",
  },
  {
    icon: "/portfolio.svg",
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    icon: "/market.svg",
    label: "Trading & Market",
    href: "/page1",
  },
  {
    icon: "/wallet.svg",
    label: "Research Portal",
    href: "/page2",
  },
  {
    icon: "/bank-transfer.svg",
    label: "Wallet Transfer Pay",
    href: "/page3",
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
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarItems;
