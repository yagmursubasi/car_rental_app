import { Car } from "@/app/types";
import { FaGasPump as Gas } from "react-icons/fa";
import { TbSteeringWheelFilled as Steer } from "react-icons/tb";
import { BsFillPeopleFill as People } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import generateImage from "@/app/utils/generateImage";

type Props = {
  car: Car;
};

const Card = ({ car }: Props) => {
  const arr = [
    { icon: <Gas />, value: car.fuelType, color: "text-green-500" },
    { icon: <Steer />, value: car.transmission, color: "text-blue-500" },
    { icon: <People />, value: car.capacity, color: "text-orange-500" },
  ];

  return (
    <div className="border border-zinc-200 shadow rounded hover:shadow-lg p-4 md:p-6">
      <div>
        <h1 className="text-xl max-md:text-2xl font-bold text-black line-clamp-1">
          {car.make} {car.model}
        </h1>
        <p className="text-zinc-500">{car.type}</p>
      </div>

      <div className="max-md:flex max-md:justify-between max-md:gap-10 mt-4">
        <div className="w-full h-[200px] relative bg-zinc-100 rounded">
          <Image
            src={generateImage(car)}
            alt={`${car.make} ${car.model}`}
            unoptimized
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-3 mt-4 md:mt-0">
          {arr.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className={`text-lg ${item.color}`}>{item.icon}</span>
              <span className="text-sm font-medium text-zinc-800">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-5 items-center">
        <p className="font-bold">
          <span className="text-black text-xl max-md:text-2xl">
            {car.price}₺ /
          </span>
          <span className="text-zinc-600 ps-1 ">Gün</span>
        </p>
        <Link
          href={`/car/${car._id} `}
          className="bg-basic-blue  py-2 px-4 rounded-md hover:brightness-90 transition text-white "
        >
          Aracı Kirala
        </Link>
      </div>
    </div>
  );
};

export default Card;
