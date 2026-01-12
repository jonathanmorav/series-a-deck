interface CustomerJourneyDiagramProps {
  className?: string;
}

/**
 * Simplified stage bar diagram showing the 5 stages of the incumbent customer journey.
 * Used in "The Need" slide to illustrate the complex process SMBs face.
 */
const CustomerJourneyDiagram = ({ className }: CustomerJourneyDiagramProps) => {
  const segments = [
    {
      id: "lead",
      label: "Lead Generation",
      duration: "1-3 days",
      color: "#061F32", // brand-darkBlue
    },
    {
      id: "initial",
      label: "Initial Contact",
      duration: "3-7 days",
      color: "#1D4769",
    },
    {
      id: "product",
      label: "Product Presentation",
      duration: "1-2 hours",
      color: "#2222F6", // brand-blue
    },
    {
      id: "underwriting",
      label: "Underwriting",
      duration: "7-14 days",
      color: "#22A3DF",
    },
    {
      id: "decision",
      label: "Decision / Close",
      duration: "Variable",
      color: "#9CA3AF", // gray
    },
  ];

  return (
    <div className={`w-full ${className ?? ""}`}>
      {/* Stage Bars - Horizontal Flow */}
      <div className="flex items-center justify-center gap-1">
        {segments.map((segment, index) => (
          <div
            key={segment.id}
            className="relative flex flex-col items-center"
          >
            {/* Arrow-shaped segment */}
            <div
              className="relative flex items-center justify-center px-4 py-3 md:px-6 md:py-4 min-w-[120px] md:min-w-[160px]"
              style={{
                backgroundColor: segment.color,
                clipPath: index === segments.length - 1 
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 8% 50%)"
                  : "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)",
              }}
            >
              <div className="text-center pl-2">
                <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                  {segment.label}
                </p>
                <p className="text-white/70 text-[10px] md:text-xs mt-0.5">
                  {segment.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerJourneyDiagram;
