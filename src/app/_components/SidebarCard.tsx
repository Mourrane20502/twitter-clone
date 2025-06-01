import Link from "next/link";
import React, { ReactNode } from "react";

type SidebarCardProps = {
  label: string;
  href: string;
  icon: ReactNode;
};

export default function SidebarCard({ label, href, icon }: SidebarCardProps) {
  return (
    <Link
      href={href}
      className="flex gap-4 items-center cursor-pointer hover:bg-[rgba(29,155,240,0.15)]  transition-all duration-300 p-3 rounded-full"
    >
      {icon} <span className="text-xl">{label}</span>
    </Link>
  );
}
