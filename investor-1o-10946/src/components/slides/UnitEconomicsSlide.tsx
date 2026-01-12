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
    { label: "Revenue Per Life", value: "$31" },
    { label: "Margin Per Life", value: "$18" },
    { label: "LTV Per SMB", value: "$18,500" },
    { label: "Persistency", value: "95%" },
  ];

  const projectionYears = ["2026(E)", "2027(E)", "2028(E)", "2029(E)", "2030(E)"];
  
  const projectionRows = [
    { label: "Total Gross Written Premium*", values: ["$6.1M", "$74.6M", "$267.8M", "$346.5M", "$505.8M"] },
    { label: "YOY Growth", values: ["—", "1121.4%", "258.9%", "29.4%", "46.0%"] },
    { label: "Total Revenue", values: ["$1.5M", "$18.7M", "$67.0M", "$86.6M", "$126.5M"], highlight: true },
    { label: "Net Income", values: ["-$6.3M", "$1.9M", "$16.8M", "$28.6M", "$63.3M"] },
    { label: "Net Margin", values: ["-422.8%", "10.0%", "25.0%", "33.0%", "50.0%"] },
    { label: "Lives Insured", values: ["4,067", "49,733", "178,533", "231,000", "337,200"] },
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

  // Total Gross Written Premium data for bar chart (in millions)
  const gwpData = [
    { year: "2026", value: 6.1, displayValue: "$6.1M" },
    { year: "2027", value: 74.6, displayValue: "$74.6M" },
    { year: "2028", value: 267.8, displayValue: "$267.8M" },
    { year: "2029", value: 346.5, displayValue: "$346.5M" },
    { year: "2030", value: 505.8, displayValue: "$505.8M" },
  ];
  const maxPremium = Math.max(...gwpData.map(d => d.value));

  // Desktop View
  return (
    <SlideContainer
      background="bg-white"
      onNavigateNext={onNavigateNext}
      sectionLabel="Unit Economics"
    >
      <div className="absolute inset-0 flex flex-col px-10 lg:px-16 pt-10 pb-16 z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-brand-darkBlue text-center mb-8"
        >
          Strong Unit Economics,{" "}
          <span className="text-brand-blue">Clear Trajectory</span>
        </motion.h1>

        {/* Main Content - Two Column Layout */}
        <div className="flex-1 flex gap-8">
          {/* Left Column - Unit Economics Stacked */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-64 flex flex-col justify-center space-y-6 border-r border-gray-200 pr-8"
          >
            {unitEconomicsCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                className="text-left"
              >
                <p className="text-sm text-brand-gray mb-1">{card.label}</p>
                <p className="text-3xl lg:text-4xl font-bold text-brand-blue">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Bar Chart + Projections Table */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-brand-darkBlue mb-2">
              Total Gross Written Premium*
            </h3>
            
            {/* Combined Bar Chart + Year Labels + Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full"
            >
              {/* Bars Row */}
              <div className="grid grid-cols-6 gap-3 h-40">
                <div /> {/* Empty first column */}
                {gwpData.map((item, index) => {
                  const maxBarHeight = 150;
                  const barHeight = Math.max(12, (item.value / maxPremium) * maxBarHeight);
                  
                  return (
                    <div key={item.year} className="flex flex-col items-center justify-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: barHeight }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.08, ease: "easeOut" }}
                        className="w-14 md:w-16 rounded-t-lg bg-brand-blue relative shadow-lg"
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.08 }}
                          className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-brand-blue whitespace-nowrap"
                        >
                          {item.displayValue}
                        </motion.span>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Year Labels Row - Acts as midpoint anchor */}
              <div className="grid grid-cols-6 gap-3 py-2 bg-gray-50 border-y border-gray-200">
                <div />
                {projectionYears.map((year) => (
                  <div key={year} className="text-center">
                    <p className="text-sm font-bold text-brand-darkBlue">{year}</p>
                  </div>
                ))}
              </div>

              {/* Table Rows - Skip first row (Total GWP - shown in chart) */}
              <div className="divide-y divide-gray-100">
                {projectionRows.slice(1).map((row, rowIndex) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + rowIndex * 0.05 }}
                    className={`grid grid-cols-6 gap-3 py-2 ${row.highlight ? "bg-brand-blue/5" : ""}`}
                  >
                    <div>
                      <p className={`text-sm ${row.highlight ? "font-semibold text-brand-darkBlue" : "text-brand-gray"}`}>
                        {row.label}
                      </p>
                    </div>
                    {row.values.map((value, i) => (
                      <div key={i} className="text-center">
                        <p className={`text-sm ${
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

              {/* Footnote */}
              <p className="text-xs text-brand-gray mt-4 italic">
                *Gross Written Premium represents year-end run rate
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default UnitEconomicsSlide;
