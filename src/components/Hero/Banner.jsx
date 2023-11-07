import EmailInput from "./EmailInput";

export default function Banner() {
  return (
    <div className="flex px-16 justify-center items-center h-full gap-20">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-white font-medium text-[3rem] tracking-wide">
            You don't have to
          </h1>
          <h1 className="text-white text-[3rem] tracking-wide font-bold">
            Fight them Alone.
          </h1>
        </div>
        <p className="text-white/30 max-w-xl font-medium text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <EmailInput />
      </div>
      <div>
        <img src="./hero.png" alt="hero" loading="lazy" />
      </div>
    </div>
  );
}
