import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";

interface MilestonesSlideProps {
  onNavigateNext: () => void;
}

const MilestonesSlide = ({ onNavigateNext }: MilestonesSlideProps) => {
  // Traction stats
  const tractionStats = [
    { value: "1,200+", label: "SMBs Served" },
    { value: "$3,000,000+", label: "Gross Written Premium" },
    { value: "$700K+", label: "ARR Run Rate" },
  ];

  // Milestone matrix: rows are work streams, columns are time horizons
  const workStreams = [
    {
      name: "Product & Engineering",
      color: "bg-brand-blue",
      shortTerm: [
        "Partners Portal launch",
        "Billing & payment automation",
        "Complete carrier integrations",
      ],
      mediumTerm: [
        "Customer service automation",
        "Deal cycle optimization tools",
        "Self-service employer portal",
      ],
      longTerm: [
        "AI-powered recommendations",
        "Enterprise-grade platform",
        "401(k) product integration",
      ],
    },
    {
      name: "GTM",
      color: "bg-brand-mint",
      shortTerm: [
        "Scale to 200 active agents",
        "5 affinity group partnerships",
      ],
      mediumTerm: [
        "1,000+ agents reselling",
        "Launch embedded partnerships",
        "National broker network",
      ],
      longTerm: [
        "Enterprise partnership capability",
        "Multi-channel distribution at scale",
        "International expansion readiness",
      ],
    },
    {
      name: "Insurance Operations",
      color: "bg-brand-purple",
      shortTerm: [
        "TPA licensing in 15 states",
        "Carrier integrations complete",
      ],
      mediumTerm: [
        "TPA licensing in 40 states",
        "Unit economic profitability",
        "Claims automation",
      ],
      longTerm: [
        "National footprint (50 states)",
        "Operating profitability",
        "New carrier partnerships",
      ],
    },
  ];

  return (
    <SlideContainer
      background="bg-white"
      onNavigateNext={onNavigateNext}
      sectionLabel="Milestones"
    >
      <div className="absolute inset-0 flex flex-col px-10 pb-16 pt-10 md:px-14 lg:px-16">
        {/* Traction Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-darkBlue">
            Momentum Built with <span className="text-brand-blue">Speed</span>
          </h1>
        </motion.div>

        {/* Traction Stats */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 grid w-full max-w-5xl grid-cols-3 gap-6 self-center"
        >
          {tractionStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue">
                {stat.value}
              </p>
              <p className="mt-2 text-sm md:text-base text-brand-gray">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full"
        >
          {/* Milestones Subheadline */}
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-darkBlue text-center mb-4">
            Sequenced Growth Milestones
          </h2>

          {/* Timeline Header - Labels at top */}
          <div className="flex items-center gap-4 mb-3">
            <div className="w-44 flex-shrink-0" /> {/* Spacer for work stream column */}
            <div className="flex-1 flex justify-between">
              <div className="w-1/3 pr-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-blue rounded-full ring-4 ring-brand-blue/20" />
                  <span className="ml-2 text-sm font-bold text-brand-blue uppercase tracking-wide">Q1 2026</span>
                </div>
              </div>
              <div className="w-1/3 pr-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-mint rounded-full ring-4 ring-brand-mint/20" />
                  <span className="ml-2 text-sm font-bold text-brand-mint uppercase tracking-wide">End 2026</span>
                </div>
              </div>
              <div className="w-1/3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-cyan rounded-full ring-4 ring-brand-cyan/20" />
                  <span className="ml-2 text-sm font-bold text-brand-cyan uppercase tracking-wide">End 2027</span>
                </div>
              </div>
            </div>
          </div>

          {/* Work Stream Timelines */}
          <div className="flex flex-col gap-5">
            {workStreams.map((stream, rowIndex) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + rowIndex * 0.1 }}
                className="flex items-start gap-4"
              >
                {/* Work Stream Label */}
                <div className="w-44 flex-shrink-0 flex items-center">
                  <div className={`w-3 h-3 ${stream.color} rounded-full mr-3`} />
                  <span className="text-sm font-semibold text-brand-darkBlue">
                    {stream.name}
                  </span>
                </div>

                {/* Timeline Content */}
                <div className="flex-1 relative">
                  {/* Horizontal Line with Arrow */}
                  <div className="absolute top-1 left-0 right-0 flex items-center">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-brand-blue via-brand-mint to-brand-cyan" />
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-brand-cyan" />
                  </div>
                  
                  {/* Milestone Content */}
                  <div className="relative flex justify-between pt-3">
                    {/* Short Term */}
                    <div className="w-1/3 pr-4">
                      <ul className="space-y-0.5">
                        {stream.shortTerm.map((item, i) => (
                          <li key={i} className="text-xs text-brand-gray">{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Medium Term */}
                    <div className="w-1/3 pr-4">
                      <ul className="space-y-0.5">
                        {stream.mediumTerm.map((item, i) => (
                          <li key={i} className="text-xs text-brand-gray">{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Long Term */}
                    <div className="w-1/3">
                      <ul className="space-y-0.5">
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
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default MilestonesSlide;
