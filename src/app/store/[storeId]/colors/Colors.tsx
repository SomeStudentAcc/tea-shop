"use client";
import { useParams } from "next/navigation";
import React from "react";
import { colorColumns } from "./ColorsColumns";
import { formatDate } from "@/lib/utils";
import Heading from "@/components/ui/heading";
import Link from "next/link";
import { STORE_URL } from "@/config/url.config";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/DataTable";
import DataTableLoading from "@/components/ui/data-table/DataTableLoading";
import { useGetColors } from "@/hooks/queries/colors/useGetColors";
import { IColor } from "@/app/shared/types/color.interface";

export default function Colors() {
  const params = useParams<{ storeId: string }>();
  const { colors, isLoading } = useGetColors();

  const formattedColors: IColor[] = colors
    ? colors.map((color) => ({
        id: color.id,
        createdAt: formatDate(color.createdAt),
        name: color.name,
        value: color.value,
        storeId: color.storeId,
      }))
    : [];
  return (
    <div className={"p-6"}>
      {isLoading ? (
        <DataTableLoading />
      ) : (
        <>
          <div className={"flex items-center justify-between"}>
            <Heading
              title={`Цвета (${colors?.length})`}
              description="Все цвета вашего магазина"
            />
            <div className={"flex items-center gap-x-4"}>
              <Link href={STORE_URL.colorCreate(params.storeId)}>
                <Button>
                  <Plus className="size-4 mr-2" /> Создать
                </Button>
              </Link>
            </div>
          </div>
          <div className={"mt-3"}>
            <DataTable
              columns={colorColumns}
              data={formattedColors}
              filterKey="name"
            />
          </div>
        </>
      )}
    </div>
  );
}
