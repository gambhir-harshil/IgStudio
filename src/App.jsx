import Hero from "./components/Hero/Hero";
import Practices from "./components/Practices/Practices";
import WhyUs from "./components/WhyUs/WhyUs";

export default function App() {
  return (
    <div className="h-full bg-primary">
      <Hero />
      <WhyUs />
      <Practices />
    </div>
  );
}
