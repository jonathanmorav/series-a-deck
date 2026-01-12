import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import { Check } from "lucide-react";
import paulPhoto from "@/assets/team-paul.jpeg";
import kevinPhoto from "@/assets/board-kevin.jpeg";
import jamesPhoto from "@/assets/board-james.jpeg";

interface BoardAdvisorsSlideProps {
  onNavigateNext: () => void;
}

const BoardAdvisorsSlide = ({ onNavigateNext }: BoardAdvisorsSlideProps) => {
  const boardMembers = [
    {
      name: "Paul Gable",
      title: "Chief Executive Officer",
      image: paulPhoto,
      highlights: [
        "ex-Chief Underwriting Officer at Prudential",
        "Former Chief Insurance Officer at Salty (acquired by CDK Global).",
        "President at IBX, exited to Alliant Insurance Services",
      ],
    },
    {
      name: "Kevin McCarthy",
      title: "Board Director",
      image: kevinPhoto,
      highlights: [
        "Former CEO, Unum",
        "Former COO, Unum Group",
      ],
    },
    {
      name: "James Hall",
      title: "Board Director",
      image: jamesPhoto,
      highlights: [
        "Founder & Executive Chairman, Embedded Insurance",
        "Founder & CEO, Salty (Acquired by CDK Global)",
        "Founder & Executive Chairman, Insurance Point (Acquired by Arthur J. Gallagher)",
      ],
    },
  ];

  return (
    <SlideContainer
      background="bg-gradient-to-br from-white via-brand-cream/30 to-brand-lightMint/20"
      onNavigateNext={onNavigateNext}
      sectionLabel="Board of Directors"
    >
      <div className="absolute inset-0 flex flex-col px-10 pb-12 pt-10 md:px-14 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-6 w-full text-center"
        >
          <h1 className="text-4xl font-bold text-brand-darkBlue md:text-5xl whitespace-nowrap">
            Board of Directors
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-1 items-center justify-center"
        >
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {boardMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-brand-blue/15 bg-white/95 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue/70">
                  Board
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={`${member.name} headshot`}
                    className="h-14 w-14 rounded-full object-cover shadow-sm md:h-16 md:w-16"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-darkBlue">{member.name}</h3>
                    {member.title ? (
                      <p className="text-sm font-medium text-brand-gray">{member.title}</p>
                    ) : null}
                  </div>
                </div>
                {member.highlights.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {member.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                        <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-mint/40">
                          <Check className="h-3 w-3 text-brand-teal" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

export default BoardAdvisorsSlide;
