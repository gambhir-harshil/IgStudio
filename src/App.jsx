import Faq from "./components/FAQ/Faq";
import HappyClients from "./components/HappyClients/HappyClients";
import Hero from "./components/Hero/Hero";
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
    </div>
  );
}
