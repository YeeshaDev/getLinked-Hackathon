import BigIdea from "../src/component/BigIdea";
import Criteria from "../src/component/Criteria";
import Faqs from "../src/component/Faqs";
import Footer from "../src/component/Footer";
import Header from "../src/component/Header";
import Hero from "../src/component/Hero";
import Partners from "../src/component/Partners";
import Prizes from "../src/component/Prizes";
import Rules from "../src/component/Rules";
import Terms from "../src/component/Terms";
import Timeline from "../src/component/TimeLine";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BigIdea />
      <Rules />
      <Criteria />
      <Faqs />
      <Timeline />
      <Prizes />
      <Partners />
      <Terms />
      <Footer />
    </div>
  );
}
