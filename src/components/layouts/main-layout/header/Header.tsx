'use client'
import React from "react";
import HeaderMenu from "./header-menu/HeaderMenu";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div
      className="p-5 gap-x-4 h-full flex items-center bg-white border-b"
      id="header"
    >
      <h1>TeaShop</h1>
      <div className="ml-auto hidden w-[40%] lg:block" id="search">
        <SearchInput />
      </div>
      <HeaderMenu />
    </div>
  );
}
