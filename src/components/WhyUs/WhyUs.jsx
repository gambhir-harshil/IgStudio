import Card from "./Card";
import Intro from "./Intro";

export default function WhyUs() {
  return (
    <div className="px-32 py-20 h-screen flex flex-col justify-between">
      <Intro />
      <h1 className="text-5xl font-semibold text-white text-center">
        Why Choose us?
      </h1>
      <div className="flex gap-6 justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
