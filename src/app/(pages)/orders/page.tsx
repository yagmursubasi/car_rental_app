import OrderCard from "@/app/components/card/order-card";
import { getOrders } from "@/app/utils/service";
import React from "react";

const Page = async () => {
  const { orders } = await getOrders();
  console.log(await getOrders());

  return (
    <div className="p-5 md:p-7 lg:px-10 text-zinc-600 ">
      <h1 className="mb-10 text-4xl font-bold">Siparişlerim</h1>{" "}
      <div className="grid gap-10">
        {orders
          ?.filter((order) => order.product)
          .map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
      </div>
    </div>
  );
};

export default Page;
