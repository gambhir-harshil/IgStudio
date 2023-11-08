import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import HappyClients from "./components/HappyClients/HappyClients";
import Hero from "./components/Hero/Hero";
import NewsLetter from "./components/Newsletter/NewsLetter";
import Practices from "./components/Practices/Practices";
import Team from "./components/Team/Team";
import WhyUs from "./components/WhyUs/WhyUs";

export default function App() {
  return (
    <div className="h-full bg-primary">
      <Hero />
      <WhyUs />
      <Practices />
      <HappyClients />
      <Team />
      <Faq />
      <NewsLetter />
      <Footer />
    </div>
  );
}
