import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import Sidebar from "../Sidebar";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <DialogTitle></DialogTitle>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
