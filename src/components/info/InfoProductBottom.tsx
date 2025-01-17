import GPUMining from "@/components/info/GPUMining";
import GPURenting from "@/components/info/GPURenting";

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
    <div className="gap-[8px] w-[100%] flex flex-col lg:flex-row">
      <GPUMining handleClickRegister={handleClickRegister} handleClickDocOne={handleClickDocOne} />
      <GPURenting handleClickRent={handleClickRent} handleClickDocTwo={handleClickDocTwo} />
    </div>
  );
}
