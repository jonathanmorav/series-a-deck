import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";

interface ConclusionSlideProps {
  onNavigateNext: () => void;
}

/**
 * Slide 14: Conclusion
 * Mirror the Mission slide's bold, minimal treatment.
 */
const ConclusionSlide = ({ onNavigateNext }: ConclusionSlideProps) => {
  const isMobile = useIsMobile();

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-gradient-to-br from-brand-darkBlue via-brand-blue to-brand-purple/90"
        onNavigateNext={onNavigateNext}
      >
        {/* Glow effects */}
        <div className="absolute top-10 right-0 w-48 h-48 bg-brand-mint/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-40 h-40 bg-brand-purple/15 rounded-full blur-3xl" />

        <div className="text-center px-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-2xl font-bold text-white leading-relaxed"
          >
            Every employee deserves great benefits.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="mt-4 text-xl font-semibold text-brand-mint"
          >
            We're making it a Cakewalk.
          </motion.h2>
        </div>
      </MobileSlideContainer>
    );
  }

  // Desktop View
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-darkBlue via-brand-blue to-brand-purple/90"
      onNavigateNext={onNavigateNext}
      navArrowClassName="text-white hover:text-brand-mint transition-colors"
      sectionLabel="Conclusion"
      lightLabel
    >
      {/* Glow effects for atmosphere */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-brand-purple/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-mint/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 pb-20 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center max-w-5xl leading-tight"
        >
          Every employee deserves great benefits.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-4 text-xl md:text-3xl lg:text-4xl font-semibold text-brand-mint text-center max-w-5xl"
        >
          We're making it a Cakewalk.
        </motion.h2>
      </div>
    </SlideContainer>
  );
};

export default ConclusionSlide;
