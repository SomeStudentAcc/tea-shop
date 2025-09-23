import { IMainStatistics } from "@/app/shared/types/statistics.interface";
import React from "react";
import { getIcon } from "./statistics.util";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountUp from "react-countup";
import { formatPrice } from "@/lib/utils";

interface Props {
  item: IMainStatistics;
}

export default function MainStatisticsItem({ item }: Props) {
  const Icon = getIcon(item.id);
  return (
    <Card className="drop-shadow-sm py-2 gap-2">
      <CardHeader className="p-4 flex items-center justify-between space-y-0 gap-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">
          {item.name}
        </CardTitle>
        <Icon className="size-5" />
      </CardHeader>
      <CardContent className="px-4 py-2">
        <h2 className="text-2xl font-medium">
          {item.id !== 1 ? (
            <CountUp end={item.value} />
          ) : (
            <CountUp end={item.value} formattingFn={formatPrice} />
          )}
        </h2>
      </CardContent>
    </Card>
  );
}
