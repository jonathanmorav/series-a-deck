import { useState } from "react";
import { motion } from "framer-motion";
import SlideContainer from "@/components/ui/SlideContainer";
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
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 border-2 border-white/40"
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

              {/* Right Circle - SMB Pooling with animated floating circles */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="relative flex h-40 w-40 md:h-48 md:w-48 items-center justify-center rounded-full bg-brand-mint shadow-lg overflow-hidden">
                  {/* Many small animated circles representing SMBs - fluid motion */}
                  {Array.from({ length: 35 }).map((_, i) => {
                    // Varied sizes for visual interest
                    const size = 8 + Math.random() * 14; // 8-22px
                    // Distribute across the circle
                    const angle = (i / 35) * Math.PI * 2 + Math.random() * 0.5;
                    const radius = 15 + Math.random() * 30; // % from center
                    const initialX = 50 + Math.cos(angle) * radius;
                    const initialY = 50 + Math.sin(angle) * radius;
                    // Slower, more fluid animation
                    const duration = 4 + Math.random() * 4; // 4-8 seconds
                    const delay = Math.random() * 3; // staggered start
                    
                    // Create smooth circular/orbital motion paths
                    const orbitRadius = 8 + Math.random() * 12;
                    const direction = Math.random() > 0.5 ? 1 : -1;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-brand-darkBlue/25 border border-brand-darkBlue/20"
                        style={{
                          width: size,
                          height: size,
                          left: `${initialX}%`,
                          top: `${initialY}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                          x: [
                            0,
                            direction * orbitRadius,
                            direction * orbitRadius * 0.7,
                            0,
                            -direction * orbitRadius * 0.5,
                            -direction * orbitRadius,
                            0,
                          ],
                          y: [
                            0,
                            orbitRadius * 0.5,
                            orbitRadius,
                            orbitRadius * 0.7,
                            orbitRadius,
                            orbitRadius * 0.3,
                            0,
                          ],
                          opacity: [0.7, 0.9, 0.8, 1, 0.85, 0.75, 0.7],
                        }}
                        transition={{
                          duration: duration,
                          delay: delay,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    );
                  })}
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
