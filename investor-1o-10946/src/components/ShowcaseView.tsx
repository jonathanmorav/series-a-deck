
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections, sectionComponents } from "./sections/SectionMapping";
import PageNavigation from "@/components/PageNavigation";
import { useFullScreen } from "@/hooks/use-fullscreen";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2 } from "lucide-react";

interface ShowcaseViewProps {
  currentSectionId: string;
  onNavigate: (sectionId: string) => void;
  onNavigateNext: () => void;
}

const ShowcaseView: React.FC<ShowcaseViewProps> = ({ 
  currentSectionId, 
  onNavigate, 
  onNavigateNext 
}) => {
  const { isFullScreen, isPseudoFullScreen, toggleFullScreen } = useFullScreen();
  
  // Get the current section component to render
  const CurrentSection = sectionComponents[currentSectionId as keyof typeof sectionComponents] || 
    (() => <p>Section not found</p>);

  useEffect(() => {
    if (!isFullScreen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        toggleFullScreen();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isFullScreen, toggleFullScreen]);

  // Prevent body scroll when in pseudo fullscreen
  useEffect(() => {
    if (isPseudoFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPseudoFullScreen]);

  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        isFullScreen && "bg-white",
        // Pseudo fullscreen styling - fixed positioning to cover viewport
        isPseudoFullScreen && "fixed inset-0 z-[100] bg-white"
      )}
    > 
      <button
        type="button"
        onClick={() => void toggleFullScreen()}
        className={cn(
          "fixed right-6 top-6 z-[110] inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-darkBlue shadow-md backdrop-blur transition hover:bg-white",
          isFullScreen && "border-gray-200 bg-white shadow-lg"
        )}
        aria-pressed={isFullScreen}
      >
        {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
      </button>
      
      {/* Current section with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSectionId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "w-full",
            isFullScreen && "h-screen overflow-y-auto"
          )}
        >
          <div className={cn(isFullScreen && "min-h-screen pb-20")}> 
            <CurrentSection onNavigateNext={onNavigateNext} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Page Navigation */}
      <PageNavigation
        sections={sections}
        currentSectionId={currentSectionId}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default ShowcaseView;
