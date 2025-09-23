"use client";
import { useGetProducts } from "@/hooks/queries/products/useGetProducts";
import { useParams } from "next/navigation";
import React from "react";
import { IProductColumn, productColumns } from "./ProductColumns";
import { formatPrice } from "@/lib/utils";
import Heading from "@/components/ui/heading";
import Link from "next/link";
import { STORE_URL } from "@/config/url.config";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/DataTable";
import DataTableLoading from "@/components/ui/data-table/DataTableLoading";

export default function Products() {
  const params = useParams<{ storeId: string }>();
  const { products, isLoading } = useGetProducts();

  const formattedProducts: IProductColumn[] = products
    ? products.map((product) => ({
        id: product.id,
        title: product.title,
        price: formatPrice(product.price),
        category: product.category.title,
        color: product.color.value,
        storeId: product.storeId,
      }))
    : [];
  return (
    <div className={'p-6'}>
      {isLoading ? (
        <DataTableLoading />
      ) : (
        <>
          <div className={'flex items-center justify-between'}>
            <Heading
              title={`Товары (${products?.length})`}
              description="Все товары вашего магазина"
            />
            <div className={'flex items-center gap-x-4'}>
              <Link href={STORE_URL.productCreate(params.storeId)}>
                <Button>
                  <Plus className="size-4 mr-2" /> Создать
                </Button>
              </Link>
            </div>
          </div>
          <div className={'mt-3'}>
            <DataTable
              columns={productColumns}
              data={formattedProducts}
              filterKey="title"
            />
          </div>
        </>
      )}{" "}
    </div>
  );
}
