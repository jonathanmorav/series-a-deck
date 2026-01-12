import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";

interface CustomerJourneySlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide: "The Need" - SMB Customer Journey with Pain Points
 * Large, impactful process bar with all pain points below
 */
const CustomerJourneySlide = ({ onNavigateNext }: CustomerJourneySlideProps) => {
  const isMobile = useIsMobile();

  const stages = [
    { id: "interest", label: "Initial Interest", duration: "1-2 weeks" },
    { id: "contact", label: "Initial Contact", duration: "1-2 weeks" },
    { id: "education", label: "Product Education", duration: "2-3 weeks" },
    { id: "underwriting", label: "Underwriting", duration: "3-4 weeks" },
    { id: "decision", label: "Decisioning / Billing", duration: "1-2 weeks" },
  ];

  // Pain points in first-person SMB owner voice - 3 rows below the process bar
  const painPointRows = [
    [
      "I don't have time for this",
      "Who can I even trust?",
      "This is way too complicated",
      "Why is this taking so long?",
      "This costs way more than I expected",
    ],
    [
      "Where do I even start?",
      "Everyone's trying to sell me something",
      "I don't understand what I'm buying",
      "What's a census?",
      "I'm paying more for less coverage",
    ],
    [
      "I'm not an HR expert",
      "I'm juggling too many disconnected systems",
      "The options available are terrible",
      "Why am I still filling out paper forms?",
      "Is this really worth it for my team?",
    ],
  ];

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-white"
        onNavigateNext={onNavigateNext}
      >
        <div className="relative z-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl font-bold text-brand-darkBlue text-center leading-relaxed mb-6"
          >
            SMBs face <span className="text-brand-blue">40+ steps</span> and{" "}
            <span className="text-brand-blue">8-12 weeks</span> to get benefits.
          </motion.h1>

          <div className="space-y-3">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-r from-brand-darkBlue to-brand-blue rounded-lg p-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white">
                    {stage.label}
                  </span>
                  <span className="text-xs text-white/70">
                    {stage.duration}
                  </span>
                </div>
                <div className="space-y-1">
                  {painPointRows.map((row, rowIdx) => (
                    <p key={rowIdx} className="text-xs text-white/80 italic">
                      "{row[index]}"
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MobileSlideContainer>
    );
  }

  // Desktop View - LARGER and more impactful
  return (
    <SlideContainer
      background="bg-white"
      onNavigateNext={onNavigateNext}
      sectionLabel="The Need"
    >
      <div className="absolute inset-0 flex flex-col px-4 pt-10 pb-16 z-10">
        {/* Headline - matches other slides */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkBlue text-center mb-10"
        >
          SMBs face <span className="text-brand-blue">40+ steps</span> and{" "}
          <span className="text-brand-blue">8-12 weeks</span> to get benefits.
        </motion.h1>

        {/* Journey Diagram - Full Width, Centered in remaining space */}
        <div className="flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto">
          {/* Process Bar - Large Gradient Arrows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className="relative flex items-center"
                style={{ marginLeft: index > 0 ? "-18px" : 0 }}
              >
                <div
                  className="relative flex items-center justify-center px-8 py-6 min-w-[200px] lg:min-w-[230px]"
                  style={{
                    background: index === 0 
                      ? "linear-gradient(90deg, #061F32 0%, #1D4769 100%)"
                      : index === 1
                      ? "linear-gradient(90deg, #1D4769 0%, #2222F6 100%)"
                      : index === 2
                      ? "linear-gradient(90deg, #2222F6 0%, #22A3DF 100%)"
                      : index === 3
                      ? "linear-gradient(90deg, #22A3DF 0%, #5BC4B0 100%)"
                      : "linear-gradient(90deg, #5BC4B0 0%, #7DD3C0 100%)",
                    clipPath:
                      index === 0
                        ? "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)"
                        : index === stages.length - 1
                        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 8% 50%)"
                        : "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)",
                  }}
                >
                  <div className="text-center pl-2">
                    <p className="text-white text-sm lg:text-base font-bold leading-tight">
                      {stage.label}
                    </p>
                    <p className="text-white/80 text-xs lg:text-sm mt-1">
                      {stage.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Connector Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex justify-center mb-3"
          >
            {stages.map((stage) => (
              <div
                key={`dot-${stage.id}`}
                className="flex-1 max-w-[230px] flex flex-col items-center"
              >
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-md" />
                <div className="h-8 border-l-2 border-gray-300" />
              </div>
            ))}
          </motion.div>

          {/* Pain Points - 3 Rows, Larger Cards */}
          <div className="space-y-3">
            {painPointRows.map((row, rowIndex) => (
              <motion.div
                key={`row-${rowIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + rowIndex * 0.1 }}
                className="flex justify-center gap-4"
              >
                {row.map((painPoint, colIndex) => (
                  <div
                    key={`pain-${rowIndex}-${colIndex}`}
                    className="flex-1 max-w-[220px] flex flex-col items-center"
                  >
                    {/* Connector line between rows */}
                    {rowIndex > 0 && (
                      <div className="h-3 border-l-2 border-gray-300 mb-2" />
                    )}
                    {/* Pain point card - white background, solid border */}
                    <div className="bg-white rounded-xl px-4 py-3 text-center border border-gray-200 shadow-sm w-full">
                      <p className="text-xs lg:text-sm text-gray-700 leading-snug italic font-medium">
                        "{painPoint}"
                      </p>
                    </div>
                    {/* Connector dot between rows */}
                    {rowIndex < painPointRows.length - 1 && (
                      <div className="mt-2 w-2.5 h-2.5 rounded-full bg-red-500" />
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default CustomerJourneySlide;
