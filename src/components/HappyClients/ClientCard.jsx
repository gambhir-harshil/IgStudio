export default function ClientCard({ idx }) {
  return (
    <div className="flex flex-col gap-3 p-6 text-white border-2 rounded-lg border-white/30">
      <div className="w-24 h-24 overflow-hidden bg-cover rounded-full">
        <img
          src={`https://i.pravatar.cc/48/${idx}`}
          alt="person"
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-2xl font-semibold">Jane Cooper</h3>
      <span className="font-light">Ceo of hunt</span>
      <p className="max-w-xs font-medium text-white/40">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
}
