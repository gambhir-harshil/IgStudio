export default function Cell({ span, img, title }) {
  return (
    <div
      className={`h-44 relative overflow-hidden ${span ? `col-span-2` : ""}`}
    >
      <img
        src={img}
        alt={title}
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute top-0 z-50 w-full h-full transition-all ease-linear bg-black/30 hover:opacity-0"></div>
      <span className="absolute bottom-4 left-[40%] z-[99] text-white uppercase font-semibold tracking-wide">
        {title}
      </span>
    </div>
  );
}
