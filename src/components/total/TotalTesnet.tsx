import { motion } from "framer-motion";
import TotalLeft from "@/components/total/TotalLeft";
import TotalRight from "@/components/total/TotalRight";

export default function TotalTestnet() {
  return (
    <div className="absolute gap-[50px] w-full sm:justify-between justify-center max-w-[1029px] flex flex-col lg:flex-row top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[30] items-center">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <TotalLeft />
      </motion.div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <TotalRight />
      </motion.div>
    </div>
  );
}
