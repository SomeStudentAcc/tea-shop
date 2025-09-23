"use client";
import { useProfile } from "@/hooks/useProfile";
import React from "react";
import MobileSidebar from "../side-bar/navigation/MobileSidebar";
import Link from "next/link";
import { DASHBOARD_URL } from "@/config/url.config";
import Image from "next/image";
import { Loader } from "@/components/ui/Loader";
import StoreSwitcher from "./StoreSwitcher";

export default function Header() {
  const { user, isLoading } = useProfile();
  return (
    <div className="p-6 gap-x-4 h-full flex items-center bg-white border-b">
      <MobileSidebar />
      <div className="flex items-center gap-x-4 ml-auto" id="headr_menu">
        {isLoading ? (
          <Loader size={"sm"} />
        ) : (
          user && (
            <>
              <StoreSwitcher items={user.stores}/>
              <Link href={DASHBOARD_URL.home()}>
                <Image
                  className="rounded-full"
                  src={user.picture}
                  width={42}
                  height={42}
                  alt="picture"
                />
              </Link>
            </>
          )
        )}
      </div>
    </div>
  );
}
