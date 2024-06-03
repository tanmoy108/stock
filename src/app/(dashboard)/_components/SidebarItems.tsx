"use client";
import React from "react";
import SideItem from "./SideItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: "/dashboard.svg",
    label: "Dashboard",
    href: "/",
  },
  {
    icon: "/portfolio.svg",
    label: "Portfolio",
    href: "/search",
  },
  {
    icon: "/market.svg",
    label: "Trading & Market",
    href: "/search",
  },
  {
    icon: "/wallet.svg",
    label: "Research Portal",
    href: "/search",
  },
  {
    icon: "/bank-transfer.svg",
    label: "Wallet Transfer Pay",
    href: "/search",
  }
];
const SidebarItems = () => {
  const pathName = usePathname();

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
