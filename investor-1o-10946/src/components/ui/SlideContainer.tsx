import React from "react";
import { cn } from "@/lib/utils";
import BottomCornerLogo from "@/components/BottomCornerLogo";
import NavigationArrow from "@/components/navigation/NavigationArrow";

interface SlideContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Background color/gradient class - defaults to white */
  background?: string;
  /** Whether to show the bottom corner logo */
  showLogo?: boolean;
  /** Whether to show the navigation arrow */
  showNavArrow?: boolean;
  /** Navigation callback for the arrow */
  onNavigateNext?: () => void;
  /** Navigation arrow color class */
  navArrowClassName?: string;
  /** Slide number for display (optional) */
  slideNumber?: number;
  /** Total slides for display (optional) */
  totalSlides?: number;
  /** Section label to show in upper left corner */
  sectionLabel?: string;
  /** Whether the label should be light (for dark backgrounds) */
  lightLabel?: boolean;
}

/**
 * SlideContainer - A wrapper component that enforces 16:9 aspect ratio for all slides.
 *
 * This component ensures consistent slide dimensions across the deck while maintaining
 * responsive behavior. The slide will scale to fit the viewport while preserving
 * the 16:9 aspect ratio.
 *
 * Design Guidelines:
 * - All slides should use this container for consistent formatting
 * - Content should be designed for 1920x1080 (Full HD) base resolution
 * - The container will scale proportionally on different screen sizes
 * - Maintains centered positioning with proper overflow handling
 */
const SlideContainer: React.FC<SlideContainerProps> = ({
  children,
  className,
  background = "bg-white",
  showLogo = true,
  showNavArrow = true,
  onNavigateNext,
  navArrowClassName = "text-brand-blue hover:text-brand-mint transition-colors",
  slideNumber,
  totalSlides,
  sectionLabel,
  lightLabel = false,
}) => {
  return (
    <section
      className={cn(
        // Full viewport container with centering (dvh accounts for browser chrome in Safari)
        "min-h-[100dvh] w-full flex items-center justify-center",
        // Padding to ensure slide doesn't touch edges
        "p-4 md:p-6 lg:p-8"
      )}
    >
      {/* 16:9 Aspect Ratio Slide */}
      <div
        className={cn(
          // 16:9 aspect ratio constraint
          "aspect-[16/9] w-full max-w-[1920px]",
          // Max height to prevent overflow on tall screens (dvh for Safari compatibility)
          "max-h-[calc(100dvh-4rem)]",
          // Base styling
          "relative overflow-hidden",
          // Border radius for modern look
          "rounded-xl md:rounded-2xl",
          // Subtle shadow for depth
          "shadow-lg",
          // Background
          background,
          // Custom classes
          className
        )}
      >
        {/* Section Label - Upper Left Corner */}
        {sectionLabel && (
          <div className="absolute top-4 left-6 z-30">
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wider",
                lightLabel ? "text-white/70" : "text-brand-gray/60"
              )}
            >
              {sectionLabel}
            </span>
          </div>
        )}

        {/* Slide Content Area */}
        <div className="absolute inset-0 flex flex-col">
          {/* Main Content */}
          <div className="flex-1 overflow-hidden relative">
            {children}
          </div>

          {/* Bottom Bar with Navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-between px-6 z-20">
            {/* Slide Number (if provided) */}
            {slideNumber && totalSlides && (
              <div className="text-sm text-brand-gray font-medium">
                {slideNumber} / {totalSlides}
              </div>
            )}

            {/* Spacer if no slide number */}
            {!slideNumber && <div />}

            {/* Navigation Arrow - centered */}
            {showNavArrow && onNavigateNext && (
              <div className="absolute left-1/2 -translate-x-1/2">
                <NavigationArrow
                  onClick={onNavigateNext}
                  className={navArrowClassName}
                />
              </div>
            )}

            {/* Spacer */}
            <div />
          </div>

          {/* Logo - fixed bottom right corner */}
          {showLogo && (
            <div className="absolute bottom-4 right-6 z-20">
              <BottomCornerLogo />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SlideContainer;
