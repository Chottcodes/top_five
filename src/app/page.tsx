import HeroImageComponent from "./components/hero";
import JobDisplay from "./components/jobDisplay";
import { CompanyData } from "./Data/companyData";

export default function Home() {

  return (
    <div className="bg-black h-full">
      <header className="w-full h-[200px] lg:h-[350px] bg-amber-50 rounded-b-lg">
        <HeroImageComponent />
      </header>
      <main className="w-full h-full flex flex-col items-center gap-5 pb-5 lg:pb-10 pt-5">
        {CompanyData.map((data, index) => (
          <section
            key={index}
            className="w-[90%] h-[600px] lg:w-[90%] lg:h-[300px] border-1 border-gray-50 border-dashed rounded-lg overflow-hidden "
          >
            <JobDisplay
              companyTitle={data.companyName}
              jobTitle={data.role}
              pay={data.pay}
              description={data.description}
              culture={data.culture}
              benefits={data.benifits}
              hybrid={data.hybrid}
              tools={data.tools}
              image={data.image}
              icon1={data.icon1}
              icon2={data.icon2}
              icon3={data.icon3}
              icon4={data.icon4}
            />
          </section>
        ))}
      </main>
    </div>
  );
}
