import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SlideContainer from "@/components/ui/SlideContainer";

interface MilestonesSlideProps {
  onNavigateNext: () => void;
}

const MilestonesSlide = ({ onNavigateNext }: MilestonesSlideProps) => {
  const yearOneStats = [
    {
      value: "1,200+",
      label: "SMBs Served",
    },
    {
      value: "$3,000,000+",
      label: "Gross Written Premium",
    },
    {
      value: "$700K+",
      label: "ARR Run Rate",
    },
  ];

  const milestoneGroups = [
    {
      title: "Short-Term Milestones",
      timeframe: "End of Q1 2026",
      accentClass: "bg-soft-purple/60 text-brand-purple",
      checkClass: "text-brand-purple",
      items: [
        "Complete TPA licensing in 15 target states",
        "Scale reseller program from 20 to 200 active agents",
        "Expand affinity group partners from 3 to 5 communities",
        "Launch first embedded platform partnership",
      ],
    },
    {
      title: "Medium-Term Objectives",
      timeframe: "End of Year 2026",
      accentClass: "bg-brand-mint/40 text-brand-teal",
      checkClass: "text-brand-teal",
      items: [
        "Reach 15,000 lives served milestone",
        "Achieve TPA licensing in 40 states",
        "Operate agent reseller platform at scale (1,000+ agents reselling)",
        "Launch broker enablement platform",
        "Establish profitability at unit economic level",
      ],
    },
    {
      title: "Long-Term Targets",
      timeframe: "End of Year 2027",
      accentClass: "bg-soft-yellow/60 text-amber-600",
      checkClass: "text-amber-500",
      items: [
        "Scale to 40,000+ lives",
        "National TPA footprint across all 50 states",
        "Achieve operating profitability",
        "Establish enterprise-level partnership capability",
        "Introduce new financial wellness products (401(k) for SMBs)",
      ],
    },
  ];

  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-cream/40 via-white to-brand-lightMint/35"
      onNavigateNext={onNavigateNext}
      sectionLabel="Milestones"
    >
      <div className="absolute inset-0 flex flex-col px-10 pb-12 pt-10 md:px-14 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-6 w-full text-center"
        >
          <h1 className="text-4xl font-bold text-brand-darkBlue md:text-5xl">
            Momentum Built with Speed
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 grid w-full max-w-5xl grid-cols-3 gap-4 self-center md:gap-8"
        >
          {yearOneStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-brand-blue md:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-brand-gray md:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <h2 className="text-2xl font-semibold text-brand-darkBlue md:text-3xl">
            Sequenced Growth Milestones Over 18 Months
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 grid flex-1 gap-6 md:grid-cols-3"
        >
          {milestoneGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-brand-blue/15 bg-white/95 p-5 shadow-md"
            >
              <span
                className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] ${group.accentClass}`}
              >
                {group.timeframe}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-brand-darkBlue">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-xs text-brand-gray md:text-sm">
                    <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-mint/30">
                      <Check className={`h-3 w-3 ${group.checkClass}`} />
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default MilestonesSlide;
