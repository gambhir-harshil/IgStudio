export default function Member({ idx }) {
  return (
    <div className="flex items-center gap-6 px-6 py-4 text-white transition-all ease-in-out rounded-lg hover:bg-accent hover:text-black">
      <div className="w-16 h-16 overflow-hidden bg-cover rounded-full ">
        <img
          src={`https://i.pravatar.cc/48/${idx}`}
          alt="person"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-2xl font-medium">Danial Def</h4>
        <span className="font-light">302 cases</span>
      </div>
    </div>
  );
}
