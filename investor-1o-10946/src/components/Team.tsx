import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SlideContainer from "@/components/ui/SlideContainer";
import paulPhoto from "@/assets/team-paul.jpeg";
import jonathanPhoto from "@/assets/team-jonathan.jpeg";
import billPhoto from "@/assets/team-bill.jpeg";
import nivPhoto from "@/assets/team-niv.jpeg";

interface TeamProps {
  onNavigateNext: () => void;
}

const leadership = [
  {
    name: "Paul Gable",
    title: "Chief Executive Officer",
    image: paulPhoto,
    highlights: [
      "ex-Chief Underwriting Officer at Prudential",
      "Former Chief Insurance Officer at Salty (acquired by CDK Global).",
      "President at IBX, exited to Alliant Insurance Services",
      "Leading expert on group benefit underwriting"
    ]
  },
  {
    name: "Jonathan Morav",
    title: "Chief Operating Officer",
    image: jonathanPhoto,
    highlights: [
      "Executive roles across Operations, Product, Strategy, and GTM at Fabric.",
      "Scaled complex venture / high growth startups from 0 --> 30 million a year in revenue and 50 --> 120 million a year in revenue",
      "Cross-functional leader delivering across operations, strategy, and GTM."
    ]
  },
  {
    name: "Bill Kennedy",
    title: "Chief Revenue Officer",
    image: billPhoto,
    highlights: [
      "Former President of Heritage One, scaling mid-market benefits distribution.",
      "Directed growth and partnerships at MGC Group.",
      "20+ years building carrier and broker relationships."
    ]
  },
  {
    name: "Niv Ben-Dor",
    title: "Chief Product Officer",
    image: nivPhoto,
    highlights: [
      "VP, Products at Cover Whale, a high-growth insurtech.",
      "Head of Product & Monetization at Content IQ (exit to Perion).",
      "Product-led growth expert focused on intuitive experiences."
    ]
  }
];

const Team = ({ onNavigateNext }: TeamProps) => {
  return (
    <SlideContainer background="bg-white" onNavigateNext={onNavigateNext} sectionLabel="Team">
      <div className="absolute inset-0 flex flex-col px-10 pb-12 pt-10 md:px-14 lg:px-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full text-center"
        >
          <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl whitespace-nowrap">
            Operators, Product Builders, and Insurance Veterans
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid flex-1 gap-6 md:grid-cols-2"
        >
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">
                Leadership
              </p>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={leader.image}
                  alt={`${leader.name} headshot`}
                  className="h-14 w-14 rounded-full object-cover shadow-sm md:h-16 md:w-16"
                />
                <div>
                  <h3 className="text-xl font-semibold text-brand-darkBlue">{leader.name}</h3>
                  <p className="text-sm font-medium text-brand-gray">{leader.title}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {leader.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                    <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-mint/40">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span>{item}</span>
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

export default Team;
