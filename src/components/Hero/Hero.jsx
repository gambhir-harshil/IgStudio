import Banner from "./Banner";
import Navbar from "./Navbar/Navbar";

export default function Hero() {
  return (
    <div className="relative h-screen bg-tertiary">
      <Navbar />
      <Banner />
    </div>
  );
}
