import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

export default function HeaderCart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">Корзина</Button>
      </SheetTrigger>
      <SheetHeader className="hidden">
        <SheetTitle>
          <Heading title="" className="text-xl" />
        </SheetTitle>
      </SheetHeader>
      <SheetContent>
        <Heading title="Корзина товаров" className="text-xl" />
      </SheetContent>
    </Sheet>
  );
}
