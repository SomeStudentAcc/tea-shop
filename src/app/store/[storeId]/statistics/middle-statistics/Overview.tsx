import { IMonthlySales } from "@/app/shared/types/statistics.interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { formatPrice } from "@/lib/utils";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

interface Props {
  data: IMonthlySales[];
}

const chartConfig = {
  value: {
    label: "Прибль",
    color: "#3B82F6",
  },
} satisfies ChartConfig;

export default function Overview({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Прибль</CardTitle>
        <CardContent>
          <ChartContainer
            className="aspect-auto h-[310px] w-full"
            config={chartConfig}
          >
            <AreaChart
              accessibilityLayer
              data={data}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={"date"}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={formatPrice}
                    indicator="line"
                  />
                }
              />
              <Area dataKey={"value"} type={"natural"}/>
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
