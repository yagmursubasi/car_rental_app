import React from "react";

const Hero = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-5 text-white">
      <div className="p-6 rounded-lg  bg-[url('/bg-1.png')] bg-center bg-cover bg-no-repeat ">
        <h1 className="font-semibold text-3xl">
          Araç Kiralama <br /> En İyi Platform
        </h1>
        <p className="my-3">
          Güvenli ve güvenilir bir şekilde araç kiralama yapmanın kolaylığı.
          Tabii ki düşük fiyata{" "}
        </p>
        <button className="bg-basic-blue py-2 px-3 rounded-md hover:brithness-90 transition text-white font-semibold ">
          Araç Kirala
        </button>
        <div className="flex justify-center">
          <img src="/car-1.png" alt="car" />
        </div>
      </div>
      <div className="p-6 rounded-lg bg-[url('/bg-2.png')] bg-center bg-cover bg-no-repeat max-lg:hidden">
        <h1 className="font-semibold text-3xl ">
          Düşük fiyata <br /> Araba Kirala
        </h1>
        <p className="my-3">
          Ucuz araç kiralaa hizmetleri ile güvenli ve konforlu olanaklar
          sunuyoruz
        </p>
        <button className="bg-[#54A6FF] py-2 px-3 rounded-md hover:brithness-90 transition text-white font-semibold  ">
          Araç Kirala
        </button>
        <div className="flex justify-center">
          <img src="/car-2.png" alt="car" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
