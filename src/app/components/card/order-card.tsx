import { Order } from "@/app/types";
import generateImage from "@/app/utils/generateImage";
import Image from "next/image";

const OrderCard = ({ order }: { order: Order }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-5 items-start md:items-center hover:bg-zinc-100/20 transition cursor-pointer hover:shadow-md">
      <Image
        src={generateImage(order.product)}
        alt={order.product.make}
        width={160}
        height={160}
        unoptimized
        className="rounded-md object-contain"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 w-full">
        <h2 className="flex flex-col">
          <span className="text-gray-600">Marka</span>
          <span className="font-semibold">
            {order.product.make} {order.product.model}
          </span>
        </h2>

        <h2 className="flex flex-col">
          <span className="text-gray-600">Ödenen Tutar</span>
          <span className="font-bold text-green-600">
            {order.product.price}₺
          </span>
        </h2>

        <h2 className="flex flex-col">
          <span className="text-gray-600">Sipariş Tarihi</span>
          <span className="font-bold text-blue-600">
            {new Date(order.createdAt).toLocaleDateString("tr")}
          </span>
        </h2>

        <h2 className="flex flex-col">
          <span className="text-gray-600">Sipariş Tipi</span>
          <span className="font-bold text-blue-600">{order.type}</span>
        </h2>
      </div>
    </div>
  );
};

export default OrderCard;
