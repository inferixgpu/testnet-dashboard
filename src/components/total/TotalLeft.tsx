import ButtonCustom from "@/components/common/ButtonCustom";

export default function TotalLeft() {
  const handleClick = () => {
    window.open("http://discord.gg/k7rVUYt6Td", "_blank");
  };
  return (
    <div className="h-[195px] flex gap-[39px] flex-col">
      <div className="h-[107px] flex flex-col">
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.70) 12.62%, #FFF 90.65%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
          className="font-normal text-center flex text-transparent sm:text-[40px] text-[30px] justify-center lg:justify-start"
        >
          Inferix GPU network
        </div>
        <div className="flex gap-[13px]">
          <p
            style={{
              backgroundImage:
                "linear-gradient(180deg, #0EFFB2 12.62%, #9EFFCF 90.65%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="flex sm:text-[40px] text-[30px]"
          >
            Testnet
          </p>
          <p className="sm:text-[40px] text-[30px] text-white">is live on IoTeX</p>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start">
        <ButtonCustom
          content={"Join our discord"}
          onClick={handleClick}
          isActive={true}
          stylesContent={{
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
          }}
          width="160px"
          height="50px"
          backgroundColor="black"
          hoverBackgroundColor="#7EFFB2CF" 
          hoverTextColor="black" 
          textColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
