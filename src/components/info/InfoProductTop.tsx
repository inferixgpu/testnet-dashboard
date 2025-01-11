import Image from "next/image";
import "@/app/styles/infoProduct.scss";
import ButtonCustom from "@/components/common/ButtonCustom";


export default function InfoProductTop() {
  const handleClick = () => {
    window.open("https://docs.inferix.io/inferix-testnet-1/guide-to-participate-in-the-staking-and-mining-program", "_blank");
  };
  return (
    
      <div className="w-[100%] lg:w-[1002px] h-[600px] sm:h-[356px] flex flex-col sm:flex-row items-center bg-[#76767629] backdrop-blur-[58px] rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)] justify-evenly">
        <Image
          className="object-contain"
          src="/assets/images/sentiment.png"
          alt="sentiment"
          width={300}
          height={300}
          priority
        />
        <div className="h-[152px] w-[300px] items-center flex flex-col text-center gap-[24px]">
          <span className="text-[#F8F8F8F2] font-medium text-[14px] sm:text-[18px]">
            Guide to participate in the Staking & Mining Program
          </span>
          <div className="w-full flex justify-center">
            <ButtonCustom
              content={"Docs"}
              onClick={handleClick}
              isActive={true}
              stylesContent={{
                fontSize: "14px",
                fontFamily: "Inter, sans-serif",
              }}
              width="130px"
              height="36px"
              backgroundColor="black"
              hoverBackgroundColor="#7EFFB2CF"
              hoverTextColor="black"
              textColor="#FFFFFF"
            />
          </div>
        </div>
        <Image
          className="object-contain"
          src="/assets/images/smartHome.png"
          alt="smartHome"
          width={300}
          height={300}
          priority
        />
      </div>
  
  );
}
