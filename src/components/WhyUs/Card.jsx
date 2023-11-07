export default function Card() {
  return (
    <div className="flex flex-col border-2 border-white/30 rounded-lg w-[24rem] gap-4 p-4 hover:bg-secondary">
      <span className="bg-white h-24 w-24 rounded-full flex items-center justify-center">
        <img src="./gift.png" alt="icon" />
      </span>
      <h4 className="text-white text-2xl font-semibold">98% Success Rate</h4>
      <p className="text-white/30 font-semibold">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button className="bg-accent rounded-full px-4 py-2 max-w-[8rem] font-medium">
        Read More
      </button>
    </div>
  );
}
