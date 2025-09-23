import { ILastUsers } from "@/app/shared/types/statistics.interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  data: ILastUsers[];
}

export default function LastUsers({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Прибль</CardTitle>
      </CardHeader>
      <CardContent>
        {data.length ? (
          data.map((user) => (
            <div key={user.id} className="flex gap-5 justify-between items-center" id="user">
              <div>
                <Image
                  className="rounded-full"
                  src={user.picture}
                  height={40}
                  width={40}
                  alt=""
                />
                <div className="" id="info">
                  <p className="" id="name">
                    {user.name}
                  </p>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="" id="total">
                +{formatPrice(user.total)}
              </div>
            </div>
          ))
        ) : (
          <div>У этого магазина нету покупателей</div>
        )}
      </CardContent>
    </Card>
  );
}
