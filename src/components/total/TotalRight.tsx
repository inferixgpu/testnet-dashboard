import Image from "next/image";

export default function TotalRight() {
  return (
    <div className="w-[337px] h-[285px] bg-[#76767629] backdrop-blur-[58px] flex justify-center items-center rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)] relative">
      <Image
        className="object-contain"
        src="/assets/images/graph-container.png"
        alt="graph-container"
        width={321}
        height={269}
        priority
      />
      <div className="flex flex-col gap-[8px] absolute top-7 left-7">
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.70) 12.62%, #FFF 90.65%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
          className="font-Rubik font-bold text-transparent text-[14px] text-center flex"
        >
          Total Network Hashrate
        </div>
        <div
          style={{
            color: "#FFFFFF",
            textShadow: "0px 0px 6px #AFFFE6",
          }}
          className="font-Rubik font-bold text-[48px] text-center"
        >
          123.45 IB
        </div>
      </div>
      <div
        style={{ color: "#F8F8F8F2" }}
        className="absolute top-[57%] left-1/2 font-Rubik font-normal text-transparent text-[14px] text-center flex"
      >
        Hashrate
      </div>
    </div>
  );
}
