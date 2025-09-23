"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form-elements/input";
import { PUBLIC_URL } from "@/config/url.config";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const router = useRouter();
  return (
    <div className="flex items-center relative" id="form">
      <Input
        className="rounded-lg rounded-r-none focus-visible:ring-transparent py-4"
        placeholder="Поиск"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        className="rounded-l-none"
        onClick={() =>
          router.push(PUBLIC_URL.explorer(`?searchTerm=${searchTerm}`))
        }
      >
        <Search className="size-4" />
      </Button>
    </div>
  );
}
