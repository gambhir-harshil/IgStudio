import Link from "./Link";

export default function Navlist() {
  return (
    <ul className="flex gap-6">
      <Link>Home</Link>
      <Link>Attorneys</Link>
      <Link>Practice Areas</Link>
      <Link>About Us</Link>
    </ul>
  );
}
