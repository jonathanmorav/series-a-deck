import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";

interface TheAskSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 13: The Ask — Funding Request
 * Investment ask with growth milestones and integrated allocation.
 */
const TheAskSlide = ({ onNavigateNext }: TheAskSlideProps) => {
  const isMobile = useIsMobile();

  // Milestone matrix with integrated allocation percentages
  const workStreams = [
    {
      name: "Product & Engineering",
      allocation: "45%",
      color: "bg-brand-blue",
      textColor: "text-brand-blue",
      shortTerm: ["Partners Portal launch", "Billing & payment automation", "Complete carrier integrations"],
      mediumTerm: ["Customer service automation", "AI-powered recommendations", "Self-service employer portal"],
      longTerm: ["Deal cycle optimization tools", "Enterprise-grade platform", "401(k) product integration"],
    },
    {
      name: "GTM",
      allocation: "30%",
      color: "bg-brand-mint",
      textColor: "text-brand-mint",
      shortTerm: ["Scale to 200 active partners", "5 affinity group partnerships"],
      mediumTerm: ["1,000+ partners reselling", "Launch embedded partnerships", "National broker network"],
      longTerm: ["Enterprise partnership capability", "Multi-channel distribution at scale", "International expansion readiness"],
    },
    {
      name: "Insurance Operations",
      allocation: "25%",
      color: "bg-brand-purple",
      textColor: "text-brand-purple",
      shortTerm: ["TPA licensing in 15 states", "Near shore customer service ops center", "SOC2 / ISO 27001 Compliance kicked off"],
      mediumTerm: ["TPA licensing in 40 states", "Unit economic profitability", "SOC2 certification"],
      longTerm: ["National footprint (50 states)", "Operating profitability", "New carrier partnerships"],
    },
  ];

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-gradient-to-br from-brand-darkBlue via-brand-blue/95 to-brand-purple/90"
        onNavigateNext={onNavigateNext}
      >
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-mint/10 rounded-full blur-3xl" />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-white text-center mb-6 relative z-10"
        >
          We're raising $5M to accelerate product build, scale distribution, and build infrastructure for growth.
        </motion.h2>

        {/* Funding Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center mb-6 w-full relative z-10"
        >
          <p className="text-brand-gray text-sm mb-2">We are raising</p>
          <p className="text-4xl font-bold text-brand-darkBlue mb-2">$5M</p>
          <p className="text-brand-blue text-lg font-medium">Series A</p>
          <p className="text-brand-gray text-xs mt-2">Pre-money valuation: $36.6M</p>

          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-brand-gray text-xs uppercase tracking-widest">Initial Close</p>
            <p className="mt-1 text-lg font-semibold text-brand-darkBlue">February 2025</p>
          </div>
        </motion.div>

        {/* Milestones Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-5 w-full relative z-10"
        >
          <h3 className="text-base font-bold text-brand-darkBlue text-center mb-4">
            Sequenced Growth Milestones
          </h3>

          {/* Timeline Labels */}
          <div className="flex justify-between mb-3 px-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-brand-blue rounded-full" />
              <span className="ml-1 text-[10px] font-bold text-brand-blue">Q1 2026</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-brand-mint rounded-full" />
              <span className="ml-1 text-[10px] font-bold text-brand-mint">End 2026</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-brand-cyan rounded-full" />
              <span className="ml-1 text-[10px] font-bold text-brand-cyan">End 2027</span>
            </div>
          </div>

          {/* Work Streams */}
          <div className="space-y-4">
            {workStreams.map((stream, index) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {/* Stream Header */}
                <div className="flex items-center mb-2">
                  <div className={`w-2 h-2 ${stream.color} rounded-full mr-2`} />
                  <span className="text-xs font-semibold text-brand-darkBlue">
                    {stream.name} <span className={`${stream.textColor}`}>({stream.allocation})</span>
                  </span>
                </div>

                {/* Gradient Line */}
                <div className="h-0.5 bg-gradient-to-r from-brand-blue via-brand-mint to-brand-cyan rounded mb-2" />

                {/* Milestones Grid */}
                <div className="grid grid-cols-3 gap-2 text-[10px] text-brand-gray">
                  <div>
                    {stream.shortTerm.slice(0, 2).map((item, i) => (
                      <p key={i} className="leading-tight mb-1">• {item}</p>
                    ))}
                  </div>
                  <div>
                    {stream.mediumTerm.slice(0, 2).map((item, i) => (
                      <p key={i} className="leading-tight mb-1">• {item}</p>
                    ))}
                  </div>
                  <div>
                    {stream.longTerm.slice(0, 2).map((item, i) => (
                      <p key={i} className="leading-tight mb-1">• {item}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </MobileSlideContainer>
    );
  }

  // Desktop View
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

      <div className="absolute inset-0 flex flex-col px-12 py-8 pb-16 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            We're raising $5M to accelerate product build, scale distribution, and build infrastructure for growth.
          </h2>
        </motion.div>

        {/* Unified White Container with Both Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="h-full grid grid-cols-[220px_1fr]">
            {/* Left: The Ask Section */}
            <div className="flex flex-col items-center justify-center p-6 border-r border-gray-200">
              <p className="text-brand-gray text-sm mb-2">We are raising</p>
              <p className="text-5xl font-bold text-brand-darkBlue mb-2">$5M</p>
              <p className="text-brand-blue text-lg font-medium">Series A</p>
              <p className="text-brand-gray text-xs mt-2">Pre-money valuation: $36.6M</p>

              <div className="mt-4 pt-3 border-t border-gray-200 w-full text-center">
                <p className="text-brand-gray text-xs uppercase tracking-[0.18em]">Initial Close</p>
                <p className="mt-1 text-xl font-semibold text-brand-darkBlue">February 2025</p>
              </div>
            </div>

            {/* Right: Milestones Section - Larger and Centered */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-brand-darkBlue text-center mb-6">
                Sequenced Growth Milestones
              </h3>

              {/* Timeline Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-52 flex-shrink-0" />
                <div className="flex-1 flex justify-between">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-brand-blue rounded-full ring-2 ring-brand-blue/20" />
                      <span className="ml-2 text-sm font-bold text-brand-blue uppercase">Q1 2026</span>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-brand-mint rounded-full ring-2 ring-brand-mint/20" />
                      <span className="ml-2 text-sm font-bold text-brand-mint uppercase">End 2026</span>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-brand-cyan rounded-full ring-2 ring-brand-cyan/20" />
                      <span className="ml-2 text-sm font-bold text-brand-cyan uppercase">End 2027</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Stream Timelines */}
              <div className="flex flex-col gap-6">
                {workStreams.map((stream, rowIndex) => (
                  <motion.div
                    key={stream.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + rowIndex * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Work Stream Label with Allocation */}
                    <div className="w-52 flex-shrink-0 flex items-center">
                      <div className={`w-3 h-3 ${stream.color} rounded-full mr-2`} />
                      <span className="text-sm font-semibold text-brand-darkBlue">
                        {stream.name} <span className={`${stream.textColor} font-bold`}>({stream.allocation})</span>
                      </span>
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 relative">
                      {/* Gradient Line with Arrow */}
                      <div className="absolute top-1.5 left-0 right-0 flex items-center">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-brand-blue via-brand-mint to-brand-cyan" />
                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-brand-cyan" />
                      </div>
                      
                      {/* Milestone Items */}
                      <div className="relative flex justify-between pt-4">
                        <div className="w-1/3 pr-3">
                          <ul className="space-y-1">
                            {stream.shortTerm.map((item, i) => (
                              <li key={i} className="text-xs text-brand-gray">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="w-1/3 pr-3">
                          <ul className="space-y-1">
                            {stream.mediumTerm.map((item, i) => (
                              <li key={i} className="text-xs text-brand-gray">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="w-1/3">
                          <ul className="space-y-1">
                            {stream.longTerm.map((item, i) => (
                              <li key={i} className="text-xs text-brand-gray">{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default TheAskSlide;
