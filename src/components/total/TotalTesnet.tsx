import TotalLeft from "@/components/total/TotalLeft";
import TotalRight from "@/components/total/TotalRight";

export default function TotalTestnet() {
    return (
    <div className="absolute w-full justify-between max-w-[1029px] flex top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[30] items-center">
      <TotalLeft />
      <TotalRight />
    </div>
  );
}
