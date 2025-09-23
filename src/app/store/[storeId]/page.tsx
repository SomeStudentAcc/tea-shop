import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import React from "react";
import Store from "./Store";

export const metadata: Metadata = {
  title: "Store management",
  ...NO_INDEX_PAGE,
};

export default function StoreIdPage() {
  return <Store />;
}
