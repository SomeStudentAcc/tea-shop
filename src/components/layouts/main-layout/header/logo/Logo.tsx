import { PUBLIC_URL } from "@/config/url.config";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href={PUBLIC_URL.home()}
      className="flex items-center gap-x-3 hover:opacity-75 transition-opacity"
    >
      <div className="text-2xl font-bold text-blue-600">Tea Shop</div>
    </Link>
  );
}
