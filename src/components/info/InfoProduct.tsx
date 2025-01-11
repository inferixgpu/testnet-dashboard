import "@/app/styles/infoProduct.scss";
import InfoProductBottom from "./InfoProductBottom";
import InfoProductTop from "./InfoProductTop";
import { motion } from "framer-motion";

interface InfoProductProps {
  isInViewport: boolean;
}

export default function InfoProduct({ isInViewport }: InfoProductProps) {
  return (
    <div className={"product"}>
      <div className={"product-container"}>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInViewport ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <InfoProductBottom />
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={isInViewport ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <InfoProductTop />
        </motion.div>
      </div>
    </div>
  );
}
