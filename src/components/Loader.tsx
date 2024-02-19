import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center grow flex-col">
      <Image
        src="/logo.svg"
        alt="EventiX"
        width={80}
        height={80}
        className="animate-bounce"
      />
      <p className="text-2xl font-semibold">Loading...</p>
    </div>
  );
};

export default Loader;
