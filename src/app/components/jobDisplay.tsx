import React from "react";
import Image from "next/image";
const jobDisplay = () => {
  return (
    <div className="w-full h-full flex">
      <section className="w-[50%] h-full flex flex-col justify-center items-center">
        <div className="h-[20%] w-full flex justify-center items-center text-3xl">
          <p>Apple</p>
        </div>
        <div className="h-[80%] w-full">

        </div>
      </section>
      <section className="w-[50%] h-full bg-black">
        <Image className="w-full h-full flex justify-center items-center object-contain" src={'/assets/images/AppleLogo.gif'} width={100} height={100} alt="apple logo"/>
      </section>
    </div>
  );
};

export default jobDisplay;
