"use client";
import React from "react";
import CreateProduct from "./CreateProduct";
import { useGetCategories } from "@/hooks/queries/categories/useGetCategories";
import { useGetColors } from "@/hooks/queries/colors/useGetColors";
import ProductForm from "../ProductForm";

export default function CreateProductPage() {
  const { categories } = useGetCategories();
  const { colors } = useGetColors();
  return <ProductForm categories={categories || []} colors={colors || []} />;
}
