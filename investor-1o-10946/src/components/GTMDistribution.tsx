import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";

interface GTMDistributionProps {
  onNavigateNext: () => void;
}

const GTMDistribution = ({ onNavigateNext }: GTMDistributionProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-white"
        onNavigateNext={onNavigateNext}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-10 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-2xl font-bold text-brand-darkBlue text-center leading-relaxed"
          >
            Our initial GTM leverages trusted partner led distribution to create a{" "}
            <span className="text-brand-blue">SMB-to-SMB referral flywheel</span>.
          </motion.h1>
        </div>
      </MobileSlideContainer>
    );
  }

  return (
    <SlideContainer
      background="bg-white"
      onNavigateNext={onNavigateNext}
      sectionLabel="Go-To-Market"
    >
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 pb-20 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-darkBlue text-center max-w-5xl leading-tight"
        >
          Our initial GTM leverages trusted partner led distribution to create a{" "}
          <span className="text-brand-blue">SMB-to-SMB referral flywheel</span>.
        </motion.h1>
      </div>
    </SlideContainer>
  );
};

export default GTMDistribution;
