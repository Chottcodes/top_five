"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export const MainCard = () => {
    const router = useRouter();
    const handleNext = () => {
        router.push('/homePage');
    }

  return (
    <section className="w-[90%] h-[55%] lg:w-[40%] lg:h-[70%] flex flex-col justify-center items-start rounded-2xl border-1 border-dashed overflow-hidden transform-all duration-300">
        <div className="h-[80%] w-full border-b-1 border-dashed flex flex-col justify-evenly items-center ">
            <div className="w-full h-[20%] flex justify-center items-center text-3xl">
                <h1>My Dream Jobs</h1>
            </div>
            <div className="w-full h-full flex justify-center items-center">
            {[
                '/assets/images/apple-Icon.png',
                '/assets/images/HD.png',
                '/assets/images/coinbaseLogos.png',
                '/assets/images/gopro.png',
                '/assets/images/Rook.png'
            ].map((images, index) => {
                return (
                    <Image key={index} className="object-contain w-[20%] h-[20%] hover:animate-bounce" src={images} alt="Apple Icon" width={900} height={900} />
                );
            })}
            </div>
        </div>
        <div className="w-full h-[20%] flex justify-center items-center">
            <button onClick={handleNext} className="w-[25%] h-[50%] hover:bg-gray-900 cursor-pointer bg-black rounded-lg border-1 border-dashed" >Enter</button>
        </div>
    </section>
  );
};
