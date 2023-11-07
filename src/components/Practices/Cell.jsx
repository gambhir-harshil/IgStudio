export default function Cell({ span, img, title }) {
  return (
    <div
      className={`h-44 relative overflow-hidden ${
        span ? `col-span-${span}` : ""
      }`}
    >
      <img
        src={img}
        alt={title}
        className="h-full w-full object-cover rounded-lg"
      />
      <div className="absolute top-0 bg-black/30 h-full z-50 w-full hover:opacity-0 transition-all ease-linear"></div>
      <span className="absolute bottom-4 left-[40%] z-[99] text-white uppercase font-medium">
        {title}
      </span>
    </div>
  );
}
