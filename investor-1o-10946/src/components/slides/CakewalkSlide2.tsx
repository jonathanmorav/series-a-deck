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
              {/* Left Circle - 1 Company */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex h-40 w-40 md:h-48 md:w-48 flex-col items-center justify-center rounded-full bg-brand-blue text-white shadow-lg"
              >
                <span className="text-3xl md:text-4xl font-bold">1</span>
                <span className="text-sm md:text-base font-medium">Company</span>
                <div className="mt-2 h-px w-12 bg-white/40" />
                <span className="mt-2 text-lg md:text-xl font-semibold">10,000</span>
                <span className="text-xs md:text-sm">lives</span>
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

              {/* Right Circle - 2,500 Companies */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex h-40 w-40 md:h-48 md:w-48 flex-col items-center justify-center rounded-full bg-brand-mint text-brand-darkBlue shadow-lg"
              >
                <span className="text-3xl md:text-4xl font-bold">2,000</span>
                <span className="text-sm md:text-base font-medium">Companies</span>
                <div className="mt-2 h-px w-12 bg-brand-darkBlue/40" />
                <span className="mt-2 text-lg md:text-xl font-semibold">10,000</span>
                <span className="text-xs md:text-sm">lives</span>
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
