import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";

interface UnitEconomicsSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide: Unit Economics & Projections
 * Combined view with unit economics row + projections table
 */
const UnitEconomicsSlide = ({ onNavigateNext }: UnitEconomicsSlideProps) => {
  const isMobile = useIsMobile();

  const unitEconomicsCards = [
    { label: "Premium Per Life", value: "$125" },
    { label: "Revenue Per Life", value: "$25" },
    { label: "Margin Per Life", value: "$18" },
    { label: "LTV Per Life", value: "$2,100" },
    { label: "Persistency", value: "95%" },
  ];

  const projectionYears = ["2026(E)", "2027(E)", "2028(E)", "2029(E)"];
  
  const projectionRows = [
    { label: "Annualized Premium", values: ["$17.2M", "$56.9M", "$162.3M", "$310M"] },
    { label: "YOY Growth", values: ["—", "230.8%", "185.2%", "91.0%"] },
    { label: "Total Revenue", values: ["$1.7M", "$10.6M", "$23.9M", "$67.2M"], highlight: true },
    { label: "Net Income", values: ["-$3.7M", "$0.9M", "$7.8M", "$34.2M"] },
    { label: "Net Margin", values: ["-212%", "8.9%", "32.4%", "51.0%"] },
    { label: "Lives Insured", values: ["18,445", "28,243", "49,823", "158,574"] },
  ];

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-white"
        onNavigateNext={onNavigateNext}
      >
        <div className="relative z-10 w-full">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-brand-darkBlue text-center mb-6"
          >
            Strong Unit Economics,{" "}
            <span className="text-brand-blue">Clear Trajectory</span>
          </motion.h1>

          {/* Unit Economics - Compact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-2 mb-6"
          >
            {unitEconomicsCards.slice(0, 3).map((card) => (
              <div key={card.label} className="text-center">
                <p className="text-[10px] text-brand-gray">{card.label}</p>
                <p className="text-lg font-bold text-brand-blue">{card.value}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 gap-2 mb-6"
          >
            {unitEconomicsCards.slice(3).map((card) => (
              <div key={card.label} className="text-center">
                <p className="text-[10px] text-brand-gray">{card.label}</p>
                <p className="text-lg font-bold text-brand-blue">{card.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Projections - Simplified for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-3 text-xs"
          >
            <div className="grid grid-cols-5 gap-1 text-center mb-2">
              <div />
              {projectionYears.map((year) => (
                <div key={year} className="font-semibold text-brand-darkBlue text-[10px]">
                  {year.replace("(E)", "")}
                </div>
              ))}
            </div>
            {projectionRows.slice(0, 4).map((row) => (
              <div key={row.label} className="grid grid-cols-5 gap-1 text-center py-1">
                <div className="text-left text-brand-gray text-[10px]">{row.label}</div>
                {row.values.map((value, i) => (
                  <div 
                    key={i} 
                    className={`text-[10px] ${row.highlight ? "font-bold text-brand-blue" : "text-brand-darkBlue"}`}
                  >
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </MobileSlideContainer>
    );
  }

  // Desktop View
  return (
    <SlideContainer
      background="bg-white"
      onNavigateNext={onNavigateNext}
      sectionLabel="Unit Economics"
    >
      <div className="absolute inset-0 flex flex-col px-12 lg:px-20 pt-12 pb-20 z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkBlue text-center mb-12"
        >
          Strong Unit Economics,{" "}
          <span className="text-brand-blue">Clear Trajectory</span>
        </motion.h1>

        {/* Unit Economics Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-14 lg:gap-20 mb-10"
        >
          {unitEconomicsCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="text-center"
            >
              <p className="text-base text-brand-gray mb-2">{card.label}</p>
              <p className="text-4xl lg:text-5xl font-bold text-brand-blue">{card.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full max-w-5xl mx-auto border-t border-gray-200 mb-6" />

        {/* Projections Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 flex items-start justify-center"
        >
          <div className="w-full max-w-5xl">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-6 pb-4 border-b border-gray-200">
              <div />
              {projectionYears.map((year) => (
                <div key={year} className="text-center">
                  <p className="text-lg font-semibold text-brand-darkBlue">{year}</p>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-100">
              {projectionRows.map((row, rowIndex) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + rowIndex * 0.05 }}
                  className={`grid grid-cols-5 gap-6 py-4 ${row.highlight ? "bg-brand-blue/5" : ""}`}
                >
                  <div>
                    <p className={`text-base ${row.highlight ? "font-semibold text-brand-darkBlue" : "text-brand-gray"}`}>
                      {row.label}
                    </p>
                  </div>
                  {row.values.map((value, i) => (
                    <div key={i} className="text-center">
                      <p className={`text-base ${
                        row.highlight 
                          ? "font-bold text-brand-blue" 
                          : "text-brand-darkBlue"
                      }`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default UnitEconomicsSlide;
