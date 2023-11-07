import { Email } from "@mui/icons-material";

export default function EmailInput() {
  return (
    <div className="relative w-[24rem] flex items-center ">
      <input
        type="email"
        placeholder="Enter your email address"
        className="px-6 py-5 rounded-full bg-primary placeholder:text-white/30 placeholder:font-medium w-full"
      />
      <button className=" absolute w-32 bg-accent py-3 rounded-full right-2">
        Let's talk
      </button>
    </div>
  );
}

// [&#xf0e0;]
