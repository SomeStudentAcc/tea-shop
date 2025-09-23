import { useGetStatistics } from "@/hooks/queries/statistics/useGetStatistics";
import React from "react";
import MainStatisticsItem from "./MainStatisticsItem";

export default function MainStatistics() {
  const { main } = useGetStatistics();
  return (
    <div
      className="mt-3 grid grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"
      id="main"
    >
      {main?.length ? (
        main.map((item) => <MainStatisticsItem key={item.id} item={item} />)
      ) : (
        <div>Нету данных для статистики</div>
      )}
    </div>
  );
}
