"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import ColorForm from "../ColorsForm";
import { colorService } from "@/services/color.service";

export default function ColorEdit() {
  const params = useParams<{ productId: string }>();

  const { data } = useQuery({
    queryKey: ["get color"],
    queryFn: () => colorService.getById(params.productId),
  });

  return <ColorForm color={data} />;
}
