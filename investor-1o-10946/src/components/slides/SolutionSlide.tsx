import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";

interface SolutionSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 3: The Solution
 * Bold hero headline
 */
const SolutionSlide = ({ onNavigateNext }: SolutionSlideProps) => {
  const isMobile = useIsMobile();

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-gradient-to-br from-brand-darkBlue via-brand-blue/90 to-brand-purple/80"
        onNavigateNext={onNavigateNext}
      >
        {/* Subtle glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-32 bg-brand-mint/10 rounded-full blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold text-white leading-relaxed text-center px-2"
        >
          Cakewalk enables all SMBs to offer{" "}
          <span className="text-brand-mint">enterprise grade employee benefits</span>{" "}
          without friction.
        </motion.h1>
      </MobileSlideContainer>
    );
  }

  // Desktop View
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-darkBlue via-brand-blue/90 to-brand-purple/80"
      onNavigateNext={onNavigateNext}
      navArrowClassName="text-white hover:text-brand-mint transition-colors"
      sectionLabel="The Solution"
      lightLabel
    >
      {/* Subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-mint/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 pb-20 z-10">
        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center max-w-5xl"
        >
          Cakewalk enables all SMBs to offer{" "}
          <span className="text-brand-mint">enterprise grade employee benefits</span>{" "}
          without friction.
        </motion.h1>
      </div>
    </SlideContainer>
  );
};

export default SolutionSlide;
