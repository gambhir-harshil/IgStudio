import Member from "./Member";

export default function Team() {
  return (
    <div className="flex flex-col items-center justify-around h-screen px-16 py-32">
      <h1 className="text-5xl font-semibold text-center text-white">
        Our Team
      </h1>
      <div className="grid grid-cols-3 gap-16">
        {Array.from({ length: 6 }, (_, i) => (
          <Member key={i} idx={i} />
        ))}
      </div>
    </div>
  );
}
