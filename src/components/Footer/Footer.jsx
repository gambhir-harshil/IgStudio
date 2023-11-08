import Logo from "../Hero/Navbar/Logo";
import Navlist from "../Hero/Navbar/Navlist";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="px-16 py-12 text-white bg-tertiary">
      <div className="flex flex-col items-center justify-around w-full gap-20">
        <div className="flex items-center justify-around w-full">
          <Logo />
          <Navlist />
          <Socials />
        </div>
        <div className="flex justify-center gap-6 text-sm font-thin text-white">
          <span>© 2020 Acme. All right reserved.</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
