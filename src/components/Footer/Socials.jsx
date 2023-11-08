import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";

export default function Socials() {
  return (
    <div className="flex gap-2 text-accent">
      <Instagram fontSize="large" />
      <Facebook fontSize="large" />
      <Twitter fontSize="large" />
      <Pinterest fontSize="large" />
    </div>
  );
}
