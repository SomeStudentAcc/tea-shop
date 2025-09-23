import React, { PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "../footer/Footer";

export default function MainLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="flex flex-col h-full" id="wrapper">
      <div className="flex-1" id="layout">
        <Header />
        <main className="mx-5 lg:mx-14">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
