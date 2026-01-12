import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import { Users, Cpu, TrendingUp } from "lucide-react";

interface TheAskSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 13: The Ask — Funding Request
 * Investment ask with use of funds breakdown.
 */
const TheAskSlide = ({ onNavigateNext }: TheAskSlideProps) => {
  const useOfFunds = [
    {
      icon: Cpu,
      category: "Product & Engineering",
      percentage: 45,
      details: "Accelerate platform velocity, underwriting automation, and partner integrations",
    },
    {
      icon: TrendingUp,
      category: "GTM",
      percentage: 30,
      details: "Distribution and marketing to scale reseller, affinity, and embedded channels",
    },
    {
      icon: Users,
      category: "Insurance Operations",
      percentage: 25,
      details: "Servicing, data, reporting infrastructure, and multi-state compliance",
    },
  ];

  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-darkBlue via-brand-blue/95 to-brand-purple/90"
      onNavigateNext={onNavigateNext}
      navArrowClassName="text-white hover:text-brand-mint transition-colors"
      sectionLabel="The Ask"
      lightLabel
    >
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 flex flex-col px-16 py-12 pb-20 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-4xl font-bold text-white">
            The Ask
          </h2>
        </motion.div>

        <div className="flex-1 grid grid-cols-2 gap-12 items-center">
          {/* Left: The Ask */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
              <p className="text-white/60 text-lg mb-2">We are raising</p>
              <p className="text-6xl font-bold text-white mb-2">$5M</p>
              <p className="text-brand-mint text-xl font-medium">Series A</p>

              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="text-center">
                  <p className="text-white/70 text-sm uppercase tracking-[0.18em]">Initial Close</p>
                  <p className="mt-2 text-2xl font-semibold text-white">February 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Use of Funds */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold text-white/80 mb-4"
            >
              Allocation
            </motion.h3>

            {useOfFunds.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-mint/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-brand-mint" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-white">{item.category}</span>
                      <span className="text-brand-mint font-bold">{item.percentage}%</span>
                    </div>
                    <p className="text-sm text-white/50">{item.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default TheAskSlide;
