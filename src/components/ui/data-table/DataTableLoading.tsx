import { FC } from "react";

import { Loader } from "../Loader";

import styles from "./DataTable.module.scss";
import { Skeleton } from "../skeleton";
import { Card, CardContent } from "../card";

const DataTableLoading: FC = () => {
  return (
    <div className={"max-w-screen-2xl mx-auto w-full"}>
      <Skeleton className={"h-8 w-48"} />
      <Skeleton className={"flex items-center py-4"} />
      <Card className={"rounded-md border"}>
        <CardContent>
          <div className={"h-[520px] w-full flex items-center justify-center"}>
            <Loader />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataTableLoading;
