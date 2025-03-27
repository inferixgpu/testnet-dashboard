import GPUMining from "@/components/info/GPUMining";
import GPURenting from "@/components/info/GPURenting";

interface InfoProductBottom {
  handleOpenModalInfo: () => void
  handleOpenModalInfoRent: () => void
}

export default function InfoProductBottom({ handleOpenModalInfo, handleOpenModalInfoRent }: InfoProductBottom) {
  const handleClickDocOne = () => {
    window.open("https://docs.inferix.io/inferix-testnet-2-on-solana-and-iotex-live/adding-gpus-to-the-network/for-gpu-providers", "_blank");
  };

  const handleClickDocTwo = () => {
    window.open("https://docs.inferix.io/inferix-testnet-2-on-solana-and-iotex-live/renting-gpu-devices", "_blank");
  };

  const handleClickRent = () => {
    handleOpenModalInfoRent()
  };
  const handleOpenModal = () => {
    handleOpenModalInfo()
  };

  return (
    <div className="gap-[8px] w-[100%] flex flex-col lg:flex-row">
      <GPUMining handleClickDocOne={handleClickDocOne} handleOpenModal={handleOpenModal} />
      <GPURenting handleClickRent={handleClickRent} handleClickDocTwo={handleClickDocTwo} />
    </div>
  );
}
