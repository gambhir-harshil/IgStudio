import { useState } from "react";
import CustomAccordion from "./CustomAccordion";

export default function Faq() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleAccordionClick = (index) => {
    if (index === openAccordion) {
      setOpenAccordion(-1);
    } else {
      setOpenAccordion(index);
    }
  };

  const customAccordions = [
    {
      title: "Do I need a personal injury report?",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      title: "How much is my case worth?",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      title: "What should I do right after a car accident?",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      title: "How much is my case worth?",
      details:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];

  return (
    <div className="flex justify-between h-screen px-48 py-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-semibold tracking-wide text-white">FAQ</h1>
        <p className="max-w-sm font-semibold text-white/30">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-16">
        {customAccordions.map((accordian, index) => (
          <CustomAccordion
            key={index}
            title={accordian.title}
            details={accordian.details}
            isOpen={index === openAccordion}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
