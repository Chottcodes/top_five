import React from "react";
import Image from "next/image";
import { Span } from "next/dist/trace";

interface types {
  companyTitle: string;
  jobTitle: string;
  pay: string;
  description: string;
  culture: string;
  benefits: string;
  hybrid: string;
  tools: string;
  image: string;
  icon1: string | null;
  icon2: string | null;
  icon3: string | null;
  icon4: string | null;
}

const jobDisplay = ({
  companyTitle,
  jobTitle,
  pay,
  description,
  culture,
  benefits,
  hybrid,
  tools,
  image,
  icon1,
  icon2,
  icon3,
  icon4,
}: types) => {
  return (
    <div className="w-full h-full flex">
      <section className="w-[50%] h-full flex flex-col justify-start items-center ">
        <div className="h-[20%] w-full flex justify-center items-center text-3xl ">
          <p>{companyTitle}</p>
        </div>
        <section className="lg:h-[55%] lg:w-[90%] text-center text-sm relative">
          <div className="absolute top-0 w-full h-3  bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute bottom-0 w-full h-3 bg-gradient-to-t from-black to-transparent"></div>

          <div className="overflow-y-scroll w-full h-full pb-5">
            <div>
              <strong className="text-xl underline">Role:</strong> {jobTitle}
            </div>
            <div>
              <strong className="text-xl underline">Pay:</strong> {pay}
            </div>
            <div>
              <strong className="text-xl underline">Interest:</strong>{" "}
              {description}
            </div>
            <div>
              <strong className="text-xl underline">Culture:</strong> {culture}
            </div>
            <div>
              <strong className="text-xl underline">Languages:</strong> {tools}
            </div>
            <div>
              <strong className="text-xl underline">Benefits:</strong>{" "}
              {benefits}
            </div>
            <div>
              <strong className="text-xl underline">Work Models:</strong>{" "}
              {hybrid}
            </div>
          </div>
        </section>
        <div className="w-[90%] h-[25%] flex justify-evenly items-center">
          {icon1 && (
            <Image
              className="object-contain h-[80%] w-[10%]"
              src={icon1}
              width={900}
              height={900}
              alt="Coding Language Icons"
            />
          )}
          {icon2 && (
            <Image
              className="object-contain h-[80%] w-[10%]"
              src={icon2}
              width={900}
              height={900}
              alt="Coding Language Icons"
            />
          )}
          {icon3 && (
            <Image
              className="object-contain h-[80%] w-[10%]"
              src={icon3}
              width={900}
              height={900}
              alt="Coding Language Icons"
            />
          )}
          {icon4 && (
            <Image
              className="object-contain h-[80%] w-[10%]"
              src={icon4}
              width={900}
              height={900}
              alt="Coding Language Icons"
            />
          )}
        </div>
      </section>
      <section className="w-[50%] h-full flex justify-center items-center bg-black">
        <Image
          className="w-full h-[90%]  object-contain"
          src={image}
          width={800}
          height={800}
          alt="Company logo"
        />
      </section>
    </div>
  );
};

export default jobDisplay;
