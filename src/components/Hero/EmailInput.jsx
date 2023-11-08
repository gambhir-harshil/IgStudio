import { Email } from "@mui/icons-material";

export default function EmailInput() {
  return (
    <div className="relative w-[24rem] flex items-center ">
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full px-6 py-5 border-2 rounded-full outline-none border-tertiary bg-primary placeholder:text-white/30 placeholder:font-medium focus:border-accent"
      />
      <button className="absolute w-32 py-3 rounded-full bg-accent right-2">
        Let's talk
      </button>
    </div>
  );
}

// [&#xf0e0;]
