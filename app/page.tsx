import Navbar from "./components/Nav-Bar/page";
import Hero from "./components/Home/page";
import Services from "./components/About Us/page";
import OurStory from "./components/About Us/ourStory";
import Team from "./components/Team/page";
import Footer from "./components/Footer/page";
import Challenges from "./components/Challenges/page";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar/>
      <Hero/>
      <OurStory/>
      <Services/>
      <Challenges/>
      <Team/>
      <Footer/>

      {/* <section id="home" className="h-screen p-10">
        <h1>Home</h1>
      </section>

      <section id="about" className="h-screen p-10">
        <h1>About Us</h1>
      </section>

      <section id="team" className="h-screen p-10">
        <h1>The Team</h1>
      </section>

      <section id="gallery" className="h-screen p-10">
        <h1>Challenges</h1>
      </section>

      <section id="contact" className="h-screen p-10">
        <h1>Contact</h1>
      </section> */}

    </main>
  );
}