import { useState } from "react";
import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
import MobileSlideContainer from "@/components/ui/MobileSlideContainer";
import { useIsMobile } from "@/hooks/use-mobile";
import prudentialLogo from "@/assets/prudential-logo.png";
import metlifeLogo from "@/assets/metlife-logo.png";
import sunlifeLogo from "@/assets/sunlife-logo.png";
import AnimatedProductDemo from "@/components/solution/AnimatedProductDemo";
import WebsiteEmbed from "@/components/solution/WebsiteEmbed";

// Compact browser demo for embedding in slide
const CompactBrowserDemo = () => {
  const [activeTab, setActiveTab] = useState("registration");
  
  const tabs = [
    { id: "registration", title: "Registration", url: "cakewalkbenefits.com/register" },
    { id: "underwriting", title: "Instant Underwriting", url: "cakewalkbenefits.com/underwriting" },
    { id: "checkout", title: "Checkout", url: "cakewalkbenefits.com/checkout" },
    { id: "wallet", title: "Benefits Wallet", url: "cakewalkbenefits.com/wallet" },
  ];

  const getCurrentUrl = () => tabs.find(t => t.id === activeTab)?.url || "cakewalkbenefits.com";

  return (
    <div className="w-full h-full max-w-2xl">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 h-full flex flex-col">
        {/* Browser Tabs - Compact */}
        <div className="bg-gray-50 border-b border-gray-200 px-2 pt-2">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-3 py-1.5 rounded-t text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 border-t border-l border-r border-gray-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Browser Controls - Compact */}
        <div className="bg-gray-100 px-3 py-1.5 flex items-center border-b border-gray-200">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-3 flex-grow">
            <div className="bg-white rounded px-2 py-1 text-[10px] text-gray-500 flex items-center">
              <span className="text-gray-400 mr-1">🔒</span>
              <span>{getCurrentUrl()}</span>
            </div>
          </div>
        </div>

        {/* Content Area - Scaled */}
        <div className="flex-1 overflow-hidden" style={{ minHeight: "420px" }}>
          <div className="transform scale-[0.65] origin-top-left" style={{ width: "154%", height: "154%" }}>
            {activeTab === "registration" && <AnimatedProductDemo />}
            {activeTab === "underwriting" && (
              <WebsiteEmbed 
                title="Real Time Underwriting"
                url="https://showcase.john.cakewalkinsurance.com/?a=taa&age=40&zipCode=54545&annualSalary=50000&reg=true&call=true&mode=compact"
                description="Live showcase"
              />
            )}
            {activeTab === "checkout" && (
              <WebsiteEmbed 
                title="Checkout"
                url="https://owner-cockpit.lovable.app/payment-setup/agreement"
                description="Payment processing"
              />
            )}
            {activeTab === "wallet" && (
              <WebsiteEmbed 
                title="Benefits Wallet"
                url="https://owner-cockpit.lovable.app/benefits-wallet"
                description="Digital wallet"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface CakewalkSlide2Props {
  onNavigateNext: () => void;
}

const CakewalkSlide2 = ({ onNavigateNext }: CakewalkSlide2Props) => {
  const isMobile = useIsMobile();

  // Mobile View
  if (isMobile) {
    return (
      <MobileSlideContainer
        background="bg-gradient-to-br from-brand-cream/40 via-white to-brand-lightMint/40"
        onNavigateNext={onNavigateNext}
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-bold text-brand-darkBlue mb-6"
        >
          Cakewalk:{" "}
          <span className="text-brand-blue">Better benefits, in minutes.</span>
        </motion.h1>

        {/* Pooling Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <h2 className="text-lg font-bold text-brand-darkBlue mb-4 text-center">
            Same Pool, Same Risk, Same Benefits
          </h2>

          {/* Pooling Visual - Stacked */}
          <div className="flex flex-col items-center gap-4">
            {/* Enterprise Circle */}
            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-blue shadow-lg">
                <motion.div
                  className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="mt-2 text-xs font-semibold text-brand-darkBlue text-center">
                1 Enterprise Company
              </span>
            </div>

            {/* Equals Sign */}
            <span className="text-3xl font-bold text-brand-darkBlue">=</span>

            {/* SMB Pooling Circle */}
            <div className="flex flex-col items-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand-mint shadow-lg overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.85, 1, 0.85],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Simplified honeycomb for mobile */}
                  <div className="absolute w-5 h-5 rounded-full bg-white/30 border-2 border-white/50" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 50 + Math.cos(rad) * 20;
                    const y = 50 + Math.sin(rad) * 20;
                    return (
                      <div
                        key={`inner-${i}`}
                        className="absolute w-4 h-4 rounded-full bg-white/25 border border-white/40"
                        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                      />
                    );
                  })}
                </motion.div>
              </div>
              <span className="mt-2 text-xs font-semibold text-brand-darkBlue text-center">
                SMBs pooled via Cakewalk
              </span>
            </div>
          </div>
        </motion.div>

        {/* Carrier Validated Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center w-full"
        >
          <h3 className="text-base font-bold text-brand-blue">
            Carrier Validated
          </h3>
          <p className="mt-1 text-xs text-brand-gray">
            Delegated underwriting authority from tier-1 carriers
          </p>

          {/* Carrier Logos */}
          <div className="mt-3 flex items-center justify-center gap-4">
            <img src={prudentialLogo} alt="Prudential" className="h-8 w-auto object-contain opacity-80" />
            <img src={metlifeLogo} alt="MetLife" className="h-8 w-auto object-contain opacity-80" />
            <img src={sunlifeLogo} alt="Sun Life" className="h-8 w-auto object-contain opacity-80" />
          </div>
        </motion.div>

        {/* Product Demo Tabs - Simplified for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 w-full"
        >
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
            <p className="text-xs text-brand-gray text-center mb-3">Experience the platform</p>
            <div className="grid grid-cols-2 gap-2">
              {["Registration", "Underwriting", "Checkout", "Benefits Wallet"].map((tab) => (
                <div
                  key={tab}
                  className="bg-brand-blue/5 rounded-lg px-3 py-2 text-center"
                >
                  <span className="text-xs font-medium text-brand-blue">{tab}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </MobileSlideContainer>
    );
  }

  // Desktop View
  return (
    <SlideContainer
      background="bg-gradient-to-br from-brand-cream/40 via-white to-brand-lightMint/40"
      onNavigateNext={onNavigateNext}
      sectionLabel="Cakewalk"
    >
      <div className="absolute inset-0 flex flex-col px-10 md:px-14 lg:px-16 pb-12 pt-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(1.75rem,2.8vw,3.5rem)] font-bold text-brand-darkBlue whitespace-nowrap"
        >
          Cakewalk:{" "}
          <span className="text-brand-blue">Better benefits, in minutes.</span>
        </motion.h1>

        {/* Split Content Area */}
        <div className="relative mt-8 flex flex-1">

          {/* Left Side - Better Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-1 flex-col items-center justify-center pr-8"
          >
            {/* Mini Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-darkBlue mb-8">
              Same Pool, Same Risk, Same Benefits
            </h2>

            {/* Pooling Visual - Two Circles */}
            <div className="flex items-center justify-center gap-6">
              {/* Left Circle - 1 Enterprise Company */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="flex h-40 w-40 md:h-48 md:w-48 items-center justify-center rounded-full bg-brand-blue shadow-lg">
                  {/* Single large pulsing icon representing enterprise */}
                  <motion.div
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/20 border-2 border-white/40"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="mt-3 text-sm md:text-base font-semibold text-brand-darkBlue text-center">
                  1 Enterprise Company
                </span>
              </motion.div>

              {/* Equals Sign */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-4xl md:text-5xl font-bold text-brand-darkBlue"
              >
                =
              </motion.span>

              {/* Right Circle - SMB Pooling with interlocked pulsing circles */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="relative flex h-40 w-40 md:h-48 md:w-48 items-center justify-center rounded-full bg-brand-mint shadow-lg overflow-hidden">
                  {/* Interlocked circles in honeycomb pattern - all pulsing together */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Honeycomb-style interlocked circles */}
                    {/* Center circle */}
                    <div className="absolute w-7 h-7 rounded-full bg-white/30 border-2 border-white/50" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                    
                    {/* Inner ring - 6 circles */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = 50 + Math.cos(rad) * 14;
                      const y = 50 + Math.sin(rad) * 14;
                      return (
                        <div
                          key={`inner-${i}`}
                          className="absolute w-6 h-6 rounded-full bg-white/25 border-2 border-white/40"
                          style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                        />
                      );
                    })}
                    
                    {/* Middle ring - 12 circles */}
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = 50 + Math.cos(rad) * 28;
                      const y = 50 + Math.sin(rad) * 28;
                      return (
                        <div
                          key={`middle-${i}`}
                          className="absolute w-5 h-5 rounded-full bg-white/20 border-2 border-white/35"
                          style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                        />
                      );
                    })}
                    
                    {/* Outer ring - 18 circles */}
                    {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = 50 + Math.cos(rad) * 42;
                      const y = 50 + Math.sin(rad) * 42;
                      return (
                        <div
                          key={`outer-${i}`}
                          className="absolute w-4 h-4 rounded-full bg-white/15 border border-white/30"
                          style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                        />
                      );
                    })}
                  </motion.div>
                </div>
                <span className="mt-3 text-sm md:text-base font-semibold text-brand-darkBlue text-center">
                  SMBs pooled via Cakewalk
                </span>
              </motion.div>
            </div>

            {/* Carrier Validated Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <h3 className="text-lg md:text-xl font-bold text-brand-blue">
                Carrier Validated
              </h3>
              <p className="mt-1 text-sm md:text-base text-brand-gray">
                Delegated underwriting authority from tier-1 carriers
              </p>

              {/* Carrier Logos */}
              <div className="mt-4 flex items-center justify-center gap-8">
                <img src={prudentialLogo} alt="Prudential" className="h-16 w-auto object-contain opacity-80" />
                <img src={metlifeLogo} alt="MetLife" className="h-16 w-auto object-contain opacity-80" />
                <img src={sunlifeLogo} alt="Sun Life" className="h-16 w-auto object-contain opacity-80" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Product Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-1 flex-col items-center justify-center pl-8"
          >
            <CompactBrowserDemo />
          </motion.div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default CakewalkSlide2;
