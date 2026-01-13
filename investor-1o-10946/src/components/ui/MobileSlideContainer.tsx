import React from "react";
import { cn } from "@/lib/utils";
import BottomCornerLogo from "@/components/BottomCornerLogo";

interface MobileSlideContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Background color/gradient class - defaults to white */
  background?: string;
  /** Whether to show the bottom corner logo */
  showLogo?: boolean;
  /** Navigation callback */
  onNavigateNext?: () => void;
}

/**
 * MobileSlideContainer - A mobile-optimized slide wrapper
 * 
 * This container is designed for vertical scrolling on mobile devices.
 * Unlike the desktop SlideContainer which enforces 16:9 aspect ratio,
 * this allows content to flow naturally in a mobile-friendly format.
 */
const MobileSlideContainer: React.FC<MobileSlideContainerProps> = ({
  children,
  className,
  background = "bg-white",
  showLogo = true,
  onNavigateNext,
}) => {
  return (
    <section
      className={cn(
        // Full viewport width, min height to fill screen (dvh for Safari compatibility)
        "min-h-[100dvh] w-full",
        // Padding for mobile
        "px-5 py-8 pb-20",
        // Background
        background,
        // Custom classes
        className
      )}
      onClick={onNavigateNext}
    >
      {/* Content Area */}
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100dvh-6rem)]">
        {children}
      </div>

      {/* Logo - fixed bottom right */}
      {showLogo && (
        <div className="fixed bottom-4 right-4 z-20">
          <BottomCornerLogo />
        </div>
      )}

      {/* Tap to continue indicator */}
      {onNavigateNext && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
          <span className="text-xs text-brand-gray/60 animate-pulse">
            Tap to continue
          </span>
        </div>
      )}
    </section>
  );
};

export default MobileSlideContainer;
