import { Add } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
export default function CustomAccordian({ title, details, isOpen, onClick }) {
  return (
    <div>
      <Accordion
        sx={{ backgroundColor: "#1D1D1D" }}
        expanded={isOpen}
        onClick={onClick}
      >
        <AccordionSummary
          expandIcon={
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent">
              <Add fontSize="small" sx={{ color: "#121212" }} />
            </span>
          }
        >
          <span className="text-xl font-semibold text-white ">{title}</span>
        </AccordionSummary>
        <AccordionDetails sx={{ maxWidth: "35rem", lineHeight: "1.8rem" }}>
          <span className="font-semibold text-white/30">{details}</span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
