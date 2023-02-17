import Hero from "./Hero";
import About from "./About";
import Donate from "./Donate";
import Volunteer from "./Volunteer";
import Article from "./Article";
import Contact from "./Contact";
import FeatureCrd from "./FeatureCard";
import GetHiredDetail from "./GetHiredDetail";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeatureCrd />
      <Donate />

      <Volunteer />
      <GetHiredDetail />
      <Article />
      <Contact />
    </div>
  );
}

export default Home;
