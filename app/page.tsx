import Navbar from "./components/Nav-Bar/page";
import Hero from "./components/Home/page";
import Services from "./components/About Us/page";
import OurStory from "./components/About Us/ourStory";
import Team from "./components/Team/page";
import Footer from "./components/Footer/page";
import Challenges from "./components/Challenges/page";
import HowItWorks from "./components/How it works/page";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar/>
      <Hero/>
      <OurStory/>
      <Services/>
      <HowItWorks/>
      <Challenges/>
      <Team/>
      <Footer/>
    </main>
  );
}