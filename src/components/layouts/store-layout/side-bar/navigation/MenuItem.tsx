"use client";
import React from "react";
import { IMenuItem } from "./menu.interface";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  item: IMenuItem;
}

export default function MenuItem({ item }: Props) {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "flex items-center gap-x-3 text-slate-500 text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-blue-200/20 hover:text-blue-500 hover:drop-shadow-sm bg-transparent transition-all duration-200",
        {
          "text-sm text-blue-500 bg-blue/20 hover:text-blue-500":
            pathname == item.link,
        }
      )}
      href={item.link}
    >
      <item.icon className="size-5" />
      {item.value}
    </Link>
  );
}
