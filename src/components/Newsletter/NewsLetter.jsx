export default function NewsLetter() {
  return (
    <div className="flex items-center justify-center px-16 py-24">
      <div className="flex flex-col gap-12 bg-[#474747]/50 py-24 px-48">
        <h1 className="text-5xl font-medium text-center text-white">
          Subscribe to Our Newsletter
        </h1>
        <div className="flex gap-2">
          <input
            type="text"
            className="px-8 py-4 bg-white placeholder:italic rounded-l-xl"
            placeholder="Name:"
          />
          <input
            type="text"
            className="px-8 py-4 bg-white placeholder:italic"
            placeholder="Email"
          />
          <button className="px-8 py-4 font-semibold uppercase bg-accent rounded-r-xl">
            send
          </button>
        </div>
      </div>
    </div>
  );
}
