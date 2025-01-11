import Image from "next/image";
import CountUp from "react-countup";

export default function TotalRight() {
  return (
    <div className="w-[337px] h-[285px] bg-[#76767629] backdrop-blur-[58px] flex justify-center items-center rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)] relative">
      <Image
        className="object-contain"
        src="/assets/icons/graph-container-1.svg"
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
            fontFamily: "Rubik",
          }}
          className=" font-bold text-transparent text-[14px] text-center flex"
        >
          Total Network Hashrate
        </div>
        <div
          style={{
            color: "#FFFFFF",
            textShadow: "0px 0px 6px #AFFFE6",
            fontFamily: "Rubik",
          }}
          className=" font-bold text-[48px] text-center"
        >
          <CountUp
            start={0}
            end={123.45}
            duration={1}
            decimals={2}
            decimal="."
          />{" "}
          IB
        </div>
      </div>
      <div
        style={{ color: "#F8F8F8F2", fontFamily: "Rubik" }}
        className="absolute top-[58%] left-1/2 font-normal text-transparent text-[14px] text-center flex"
      >
        Hashrate
      </div>
    </div>
  );
}
