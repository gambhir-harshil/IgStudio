import Logo from "./Logo";
import Navlist from "./Navlist";

export default function Navbar() {
  return (
    <div className="absolute py-4 px-16 w-full z-50 text-white flex justify-between items-center">
      <Logo />
      <Navlist />
      <button className="border-2 border-white px-4 py-2 hover:bg-white/30 transition-all ease-in">
        Contact Now
      </button>
    </div>
  );
}
