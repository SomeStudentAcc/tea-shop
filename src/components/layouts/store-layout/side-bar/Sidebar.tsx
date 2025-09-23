import React from "react";
import Logo from "../../main-layout/header/logo/Logo";
import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <div
      className="h-full flex flex-col bg-neutral-50 border-r overflow-y-auto pt-4 px-5 my-1"
      id="sidebar"
    >
      <Logo />
      <Navigation />
    </div>
  );
}
