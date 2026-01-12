import { motion } from "framer-motion";
import { Shield, Banknote, PieChart } from "lucide-react";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";

interface WhyMarketFailsSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 4: Why The Market Fails Them
 *
 * Structure: Headline → Subheadline → 3 Problem Cards (Accessibility, Affordability, Complexity)
 * Explains the systemic reasons why small businesses are underserved
 */
const WhyMarketFailsSlide = ({ onNavigateNext }: WhyMarketFailsSlideProps) => {
  const isMobile = useIsMobile();

  const marketProblems = [
    {
      icon: <Shield size={28} />,
      bgColor: "bg-soft-blue",
      iconColor: "text-brand-blue",
      title: "Accessibility",
      description:
        "Built for enterprises. No products exist for teams under 50.",
    },
    {
      icon: <Banknote size={28} />,
      bgColor: "bg-soft-purple",
      iconColor: "text-brand-purple",
      title: "Affordability",
      description:
        "Premiums priced for Fortune 500, not Main Street.",
    },
    {
      icon: <PieChart size={28} />,
      bgColor: "bg-soft-green",
      iconColor: "text-emerald-500",
      title: "Complexity",
      description:
        "40+ steps to enroll. No HR department to manage it.",
    },
  ];

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-gradient-to-br from-brand-blue/5 via-white to-brand-cream"
        onNavigateNext={onNavigateNext}
      >
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="text-brand-blue font-semibold text-xs uppercase tracking-wider">
            Why The Market Fails Them
          </span>
          <h2 className="text-xl font-bold text-brand-darkBlue mt-2">
            Traditional employee benefits were never designed for SMBs
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-gray-600 text-center mb-6"
        >
          Owners are forced to choose between no coverage or overpriced plans and manual processes that sap valuable time.
        </motion.p>

        {/* Problem Cards - Stacked */}
        <div className="space-y-4 w-full">
          {marketProblems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className={`${problem.bgColor} rounded-full p-2 flex-shrink-0`}>
                <div className={problem.iconColor}>{problem.icon}</div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-brand-darkBlue">{problem.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </MobileSlideContainer>
    );
  }

  // Desktop View
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-blue/5 via-white to-brand-cream"
      onNavigateNext={onNavigateNext}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 pb-20">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">
            Why The Market Fails Them
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-darkBlue mt-2 max-w-4xl">
            Traditional employee benefits were never designed for SMBs
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base md:text-lg text-gray-600 text-center max-w-3xl mb-10"
        >
          Owners are forced to choose between no coverage or overpriced plans and manual processes that sap valuable time.
        </motion.p>

        {/* Problem Cards Grid - 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full"
        >
          {marketProblems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <div className={`${problem.bgColor} mb-4 rounded-full p-3`}>
                <div className={problem.iconColor}>{problem.icon}</div>
              </div>
              <h4 className="mb-3 text-lg font-semibold text-brand-darkBlue">
                {problem.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default WhyMarketFailsSlide;
