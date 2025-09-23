import { useProfile } from "@/hooks/useProfile";
import React from "react";
import HeaderCart from "./HeaderCart";
import Link from "next/link";
import { DASHBOARD_URL, PUBLIC_URL, STORE_URL } from "@/config/url.config";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/Loader";
import { LogOut } from "lucide-react";
import CreateStoreModal from "@/components/ui/modals/CreateStoreModal";
import Image from "next/image";

export default function HeaderMenu() {
  const { user, isLoading } = useProfile();
  return (
    <div
      className="hidden items-center gap-x-2 ml-auto lg:flex"
      id="header menu"
    >
      <HeaderCart />
      <Link href={PUBLIC_URL.explorer()}>
        <Button value={"ghost"}>Каталог</Button>
      </Link>
      {isLoading ? (
        <Loader />
      ) : user ? (
        <>
          <Link href={DASHBOARD_URL.favorites()}>
            <Button value={"ghost"}>Избранное</Button>
          </Link>
          {user.stores.length ? (
            <Link href={STORE_URL.home(user.stores[0].id)}>
              <Button variant={"ghost"}>Мои магазины</Button>
            </Link>
          ) : (
            <CreateStoreModal>
              <Button variant={"ghost"}>Создать магазин</Button>
            </CreateStoreModal>
          )}
          <Link href={DASHBOARD_URL.home()}>
            <Image
              src={user.picture}
              alt=""
              width={42}
              height={42}
              className="rounded-full"
              id="avatar"
            />
          </Link>
        </>
      ) : (
        <Link href={PUBLIC_URL.auth()}>
          <LogOut className="size-4 mr-2" id="icon" />
          <Button value={"ghost"}>Войти</Button>
        </Link>
      )}
    </div>
  );
}
