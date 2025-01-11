import Image from "next/image";
import "@/app/styles/infoProduct.scss";
import ButtonCustom from "@/components/common/ButtonCustom";


export default function InfoProductBottom() {
    const handleClickRegister = () => {
        window.open("https://cloud.inferix.io/", "_blank");
    };
    const handleClickDocOne = () => {
        window.open("https://docs.inferix.io/inferix-testnet-1/adding-gpus-to-the-network", "_blank");
      };
    const handleClickDocTwo = () => {
        window.open("https://docs.inferix.io/inferix-testnet-1/renting-gpu-devices", "_blank");
    };
    const handleClickRent = () => {
        window.open("https://cloud.inferix.io/", "_blank");
      };
  return (
   
      <div className="flex gap-[8px]">
        <div className="w-[100%] lg:w-[497px] h-[356px] sm:h-[356px] items-center bg-[#76767629] backdrop-blur-[58px] flex flex-col sm:flex-row lg:justify-start justify-center rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)]">
          <Image
            className="object-contain"
            src="/assets/images/education.png"
            alt="education"
            width={400}
            height={356}
            priority
          />
          <div className="h-[152px] absolute mt-[-55px] w-[159px] items-center sm:mt-[0] justify-start sm:justify-between top-[270px] sm:top-[108px] sm:left-[315px] flex flex-col lg:items-start text-center sm:text-left gap-[24px]">
            <span className="text-[#F8F8F8F2] font-medium text-[14px] text-center sm:text-[18px] cursor-default">
              GPU Mining Registration Port
            </span>
            <div className="w-full items-center flex flex-col gap-[16px] justify-between">
              <ButtonCustom
                content={"Register now"}
                onClick={handleClickRegister}
                isActive={true}
                stylesContent={{
                  fontSize: "14px",
                  fontFamily: "Inter, sans-serif",
                }}
                width="130px"
                height="36px"
                backgroundColor="#01CAAA"
                hoverBackgroundColor="#7EFFB2CF"
                hoverTextColor="black"
                textColor="black"
              />
              <ButtonCustom
                content={"Docs"}
                onClick={handleClickDocOne}
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
        </div>

        <div className="w-[100%] lg:w-[497px] h-[356px] sm:h-[356px] items-center bg-[#76767629] backdrop-blur-[58px] flex flex-col sm:flex-row lg:justify-start justify-center rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)]">
          <Image
            className="object-contain"
            src="/assets/images/commands.png"
            alt="commands"
            width={400}
            height={356}
            priority
          />
          <div className="h-[152px] absolute mt-[-55px] w-[159px] items-center sm:mt-[0] justify-start sm:justify-between top-[270px] sm:top-[108px] sm:left-[315px] flex flex-col lg:items-start text-center sm:text-left gap-[24px]">
            <span className="text-[#F8F8F8F2] font-medium text-[14px] text-center sm:text-[18px] cursor-default">
              GPU Mining Registration Port
            </span>
            <div className="w-full items-center flex flex-col gap-[16px] justify-between">
              <ButtonCustom
                content={"Rent now"}
                onClick={handleClickRent}
                isActive={true}
                stylesContent={{
                  fontSize: "14px",
                  fontFamily: "Inter, sans-serif",
                }}
                width="130px"
                height="36px"
                backgroundColor="#01CAAA"
                hoverBackgroundColor="#7EFFB2CF"
                hoverTextColor="black"
                textColor="black"
              />
              <ButtonCustom
                content={"Docs"}
                onClick={handleClickDocTwo}
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
        </div>
      </div>
    
  );
}
