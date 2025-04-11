import React from "react";
import Image from "next/image";


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
    <div className="w-full h-full flex flex-col-reverse justify-center items-center lg:flex-row">
      <section className="h-[70%] lg:w-[50%] lg:h-full flex flex-col justify-start items-center ">
        <div className="h-[20%] w-full flex justify-center items-center text-xl lg:text-3xl ">
          <p>{companyTitle}</p>
        </div>
        <section className="h-[60%] w-[90%]  lg:h-[55%] lg:w-[90%] text-center relative">
          <div className="absolute top-0 w-full h-2 lg:h-3  bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute bottom-0 w-full h-2 lg:h-3 bg-gradient-to-t from-black to-transparent"></div>
          <div className="overflow-y-scroll custom-scroll w-full h-full lg:text-sm pb-5">
            <div>
              <strong className="text-small lg:text-xl underline">Role:</strong> {jobTitle}
            </div>
            <div>
              <strong className="text-small lg:text-xl underline">Pay:</strong> {pay}
            </div>
            <div>
              <strong className="text-small lg:text-xl underline">Interest:</strong>{" "}
              {description}
            </div>
            <div>
              <strong className="text-small lg:text-xl underline">Culture:</strong> {culture}
            </div>
            <div>
              <strong className="text-small lg:text-xl underline">Languages:</strong> {tools}
            </div>
            <div>
              <strong className="text-small lg:text-xl underline">Benefits:</strong>{" "}
              {benefits}
            </div>
            <div>
              <strong className="text-small lg:text-xl underline">Work Models:</strong>{" "}
              {hybrid}
            </div>
          </div>
        </section>
        <div className="w-[90%] h-[20%] lg:w-[90%] lg:h-[25%] flex justify-evenly items-center">
          {icon1 && (
            <Image
              className="object-contain h-[50%] w-[20%] lg:w-[10%]"
              src={icon1}
              width={900}
              height={900}
              alt="Coding Language Icons"
            />
          )}
          {icon2 && (
            <Image
              className="object-contain h-[50%] w-[20%] lg:w-[10%]"
              src={icon2}
              width={900}
              height={900}
              alt="Coding Language Icons"
            />
          )}
          {icon3 && (
            <Image
              className="object-contain h-[50%] w-[20%] lg:w-[10%]"
              src={icon3}
              width={900}
              height={900}
              alt="Coding Language Icons"
            />
          )}
          {icon4 && (
            <Image
              className="object-contain h-[50%] w-[20%] lg:w-[10%]"
              src={icon4}
              width={900}
              height={900}
              alt="Coding Language Icons"
            />
          )}
        </div>
      </section>
      <section className=" h-[30%] w-full lg:w-[50%] lg:h-full flex justify-center items-center">
        <Image
          className="w-[60%] h-[80%] lg:w-full lg:h-[90%] lg:object-contain "
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
