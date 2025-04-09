import React from "react";
import Image from "next/image";
const HeroImageComponent = () => {
  return <div className="h-full w-full relative">
    <Image className="w-full h-full object-cover" src={'/assets/images/HeroImg.jpg'} width={900} height={900} alt="computer"/>
    <div className="absolute w-full h-full bg-black/35 bottom-0 flex flex-col justify-center items-center text-4xl ">
    <p>A list of dream jobs</p>
    </div>
  </div>;
};

export default HeroImageComponent;
