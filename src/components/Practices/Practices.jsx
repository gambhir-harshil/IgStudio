import Cell from "./Cell";

export default function Practices() {
  return (
    <div className="h-screen flex flex-col justify-between items-center px-16 py-16">
      <h1 className="text-5xl font-semibold text-white text-center">
        Area of Practices
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <Cell span={2} img="./practice/1.jpeg" title="Bussiness law" />
        <Cell img="./practice/2.webp" title="Partnership law" />
        <Cell img="./practice/4.webp" title="Real estate law" />
        <Cell span={2} img="./practice/3.webp" title="marriage law" />
        <Cell span={2} img="./practice/5.webp" title="Landlord disputes" />
        <Cell img="./practice/6.jpg" title="Elder abuse" />
      </div>
    </div>
  );
}
