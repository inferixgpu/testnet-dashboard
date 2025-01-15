import "@/app/styles/infoProduct.scss";
import InfoProductBottom from "./InfoProductBottom";
import InfoProductTop from "./InfoProductTop";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface InfoProductProps {
  isInViewport: boolean;
}

export default function InfoProduct({ isInViewport }: InfoProductProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) {
    return (
      <div className={"product"} style={{ overflowX: "hidden" }}>
        <div className={"product-container"}>
          <InfoProductBottom />
          <InfoProductTop />
        </div>
      </div>
    );
  }

  return (
    <div className={"product"} style={{ overflowX: "hidden" }}>
      <div className={"product-container"}>
        <motion.div
          style={{ overflow: "hidden", width: "100%" }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInViewport ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <InfoProductBottom />
        </motion.div>
        <motion.div
          style={{ overflow: "hidden", width: "100%" }}
          initial={{ x: "100%", opacity: 0 }}
          animate={isInViewport ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <InfoProductTop />
        </motion.div>
      </div>
    </div>
  );
}
