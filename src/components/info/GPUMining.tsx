import Image from "next/image";
import ButtonCustom from "@/components/common/ButtonCustom";

interface GPUMiningProps {
  handleClickRegister: () => void;
  handleClickDocOne: () => void;
}

const GPUMining = ({
  handleClickRegister,
  handleClickDocOne,
}: GPUMiningProps) => {
  const GPUContent = ({
    isMobile,
    imageSrc,
    containerClass,
    imageClass,
    buttonContainerClass,
  }: {
    isMobile: boolean;
    imageSrc: string;
    containerClass: string;
    imageClass: string;
    buttonContainerClass: string;
  }) => (
    <div className={containerClass}>
      <Image
        className={imageClass}
        src={imageSrc}
        alt={isMobile ? "education_mb" : "education"}
        width={400}
        height={356}
        priority
      />
      <div className={buttonContainerClass}>
        <span className="text-[#F8F8F8F2] font-medium text-[14px] sm:text-[18px] cursor-default text-center">
          GPU Mining Registration Port
        </span>
        <div className="w-full items-center flex flex-col gap-[16px]">
          <ButtonCustom
            content="Register now"
            onClick={handleClickRegister}
            isActive
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
            content="Docs"
            onClick={handleClickDocOne}
            isActive
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
  );

  return (
    <>
      <GPUContent
        isMobile={false}
        imageSrc="/assets/images/education.png"
        containerClass="w-[100%] lg:w-[497px] h-[356px] hidden sm:flex lg:justify-start items-center 
        bg-[#76767629] backdrop-blur-[58px] rounded-[8px] 
        border-b-[2px] sm:border-[0px] border-[#25272670] justify-center"
        imageClass="object-contain"
        buttonContainerClass="h-[152px] ml-[-80px] mt-[-55px] w-[159px] items-center justify-start sm:justify-between top-[270px] sm:top-[108px] sm:left-[315px] flex flex-col lg:items-start text-center sm:text-left gap-[24px]"
      />
      <GPUContent
        isMobile={true}
        imageSrc="/assets/images/education_mb.png"
        containerClass="w-[100%] sm:hidden lg:w-[497px] justify-center h-[444px] items-center bg-[#76767629] backdrop-blur-[58px] flex lg:justify-start  rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)]"
        imageClass="object-contain mt-[54px]"
        buttonContainerClass="absolute h-[152px] w-[159px] bottom-[7%] flex flex-col text-center gap-[24px]"
      />
    </>
  );
};

export default GPUMining;
