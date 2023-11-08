export default function Button({ children, left, swiperRef }) {
  return (
    <button
      className={`${
        left ? "bg-[#E6E6E6]" : "bg-accent"
      } h-16 w-16 rounded-full text-3xl`}
      onClick={() =>
        left ? swiperRef.current.slidePrev() : swiperRef.current.slideNext()
      }
    >
      {children}
    </button>
  );
}
