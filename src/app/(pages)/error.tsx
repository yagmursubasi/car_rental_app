"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: Props) => {
  return (
    <div className=" bg-red-400 text-white mx-auto p-5 rounded-md max-w-[500px] mt-[250px] w-[90%] text-center  ">
      <h1 className="font-semibold text-lg">Üzgünüz bir sorun oluştu!</h1>
      <p className="my-3">{error.name} </p>
      <div className="flex justify-center">
        <button
          onClick={reset}
          className="border py-1 px-3 rounded-md cursor-pointer mt-3 "
        >
          Tekrar Dene{" "}
        </button>
      </div>
    </div>
  );
};

export default Error;
