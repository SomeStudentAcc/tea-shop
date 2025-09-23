"use client";
import { Button } from "@/components/ui/button";
import { SERVER_URL } from "@/config/api.config";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import React from "react";

export default function Social() {
  const router = useRouter();
  return (
    <div className="space-y-3 w-full mt-5">
      <Button
        variant={"outline"}
        className="w-full"
        onClick={() => router.push(`${SERVER_URL}/auth/google`)}
      >
        <FcGoogle size={5} className="mr-2" />
        Conyinue with google
      </Button>
    </div>
  );
}
