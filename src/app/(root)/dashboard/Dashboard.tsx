"use client";
import { saveTokenStorage } from "@/services/auth/auth-token.service";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("accessToken");

  useEffect(() => {
    if (accessToken) {
      saveTokenStorage(accessToken);
    }
  }, [accessToken]);
  return <div>Dashboard</div>;
}
