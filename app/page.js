"use client";
import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/components/Hero/Hero";
import BradingVideo from "@/src/components/BrandingVideo/BradingVideo";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import OurDiff from "@/src/components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "@/src/components/HowItWorks/HowItWorks";
import WhoWeInvest from "@/src/components/WhoWeInvest/WhoWeInvest";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import Footer from "@/src/components/Footer/Footer";
export default function Home() {
  const control = useAnimation();
  return (
    <motion.div className="app" animate={control}>
      <Navbar />
      <Hero />
      <BradingVideo />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          control.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          control.start({
            backgroundColor: "#fff",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>
      <HowItWorks />
      <motion.div
        onViewportEnter={() =>
          control.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          control.start({
            backgroundColor: "#fff",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvest />
      </motion.div>
      <Testimonials />
      <Footer />
    </motion.div>
  );
}
