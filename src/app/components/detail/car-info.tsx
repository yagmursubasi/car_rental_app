import { Car } from "@/app/types";
import { FaHeart, FaStar } from "react-icons/fa";
import RentButton from "./rent-button";

interface Props {
  car: Car;
}

const CarInfo = ({ car }: Props) => {
  const arr = [
    { title: "Araç Tipi", value: car.type },
    { title: "Şanzıman", value: car.transmission },
    { title: "Renk", value: car.color },
    { title: "Yıl", value: car.year },
    { title: "Kapasite", value: car.capacity },
    { title: "Yakıt Türü", value: car.fuelType },
    { title: "Çekiş", value: car.drive },
    { title: "Yakıt Kapasitesi", value: car.gasoline ?? "-" },
  ];
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">
            {car.make} {car.model}
          </h1>
          <FaHeart className="text-red-500 text-xl" />
        </div>
        <div className="flex gap-2 my-3 items-center">
          {new Array(5).fill("").map((i, key) => (
            <FaStar
              key={key}
              className={key < 4 ? "text-yellow-500" : "text-zinc-400"}
            />
          ))}
          <span className="text-zinc-400 text-sm ms-3">440+ yorum</span>
        </div>
        <p className="leading-8 tracking-wide  text-zinc-700 my-10 text-[20px] ">
          {car.description}
        </p>
        <div className="grid grid-cols-2 gap-5 ">
          {arr.map(({ title, value }, key) => (
            <p key={key} className="flex justify-between">
              <span className="text-gray-400">{title}: </span>
              <span className="text-zinc-800">{value}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-14">
        <p className="font-bold">
          <span className="text-black text-xl max-md:text-2xl">
            {car.price}₺ /
          </span>
          <span className="text-zinc-600 ps-1 ">Gün</span>
        </p>
        <RentButton car={car} />
      </div>
    </div>
  );
};

export default CarInfo;
