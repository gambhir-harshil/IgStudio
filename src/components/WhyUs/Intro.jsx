export default function Intro() {
  return (
    <div className="flex justify-around items-center">
      <h3 className="text-white text-5xl font-medium max-w-[24rem] leading-snug">
        Let's Introduce Ourself
      </h3>
      <div className="w-[2px] h-40 bg-white/30"></div>
      <div className="flex flex-col gap-2">
        <h5 className="text-white text-3xl font-medium">Criminal Lawyer</h5>
        <p className="text-white/30 max-w-[30rem] text-lg font-semibold">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}
