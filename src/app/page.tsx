import HeroImageComponent from "./components/hero";
import JobDisplay from "./components/jobDisplay";

export default function Home() {
  return (
    <div className="bg-black h-[100%]">
        <header className="w-full h-[350px] bg-amber-50">
          <HeroImageComponent />
        </header>
      <main className="w-full h-full flex flex-col items-center">
        <section className="lg:w-[90%] lg:h-[300px] border-1 border-gray-50 border-dashed">
          <JobDisplay />
        </section>
      </main>
    </div>
  );
}
