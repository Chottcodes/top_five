import HeroImageComponent from "./components/hero";
import JobDisplay from "./components/jobDisplay";

export default function Home() {
  return (
    <div className="bg-[#121212] h-screen">
        <header className="w-full h-[350px] bg-amber-50">
          <HeroImageComponent />
        </header>
      <main className="w-full h-full bg-amber-400">
        <section className="w-full h-[40%] bg-red-500">
          <JobDisplay />
        </section>
      </main>
    </div>
  );
}
