import { useEffect } from "react";
import Image from "next/image";
import ButtonCustom from "../common/ButtonCustom";

interface ModalRegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);


    const handleIotex = () => {
        window.open("https://provider.inferix.io/", "_blank");
    };

    const handleSolana = () => {
        window.open("https://miner.inferix.io/", "_blank");
    };

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0000007A] backdrop-blur-[6px] p-4 overflow-hidden">

            <div className="bg-[#111111] p-6 rounded-[20px] shadow-lg w-[480px] h-[361px] flex flex-col items-center relative">
                <Image
                    className="cursor-pointer transition-all duration-500"
                    src="/assets/icons/logoIFX.svg"
                    alt="logo"
                    width={158}
                    height={32}
                    priority
                />
                <div className="flex flex-grow justify-center items-center flex-col gap-y-4">
                    <div className="w-full items-center flex flex-col gap-[16px]">
                        <ButtonCustom
                            content="IoTeX"
                            onClick={handleIotex}
                            isActive
                            stylesContent={{
                                fontSize: "14px",
                                fontFamily: "Inter, sans-serif",
                            }}
                            width="360px"
                            height="54.54px"
                            backgroundColor="black"
                            hoverBackgroundColor="#7EFFB2CF"
                            hoverTextColor="black"
                            textColor="white"
                        />
                        <ButtonCustom
                            content="Solana"
                            onClick={handleSolana}
                            isActive
                            stylesContent={{
                                fontSize: "14px",
                                fontFamily: "Inter, sans-serif",
                            }}
                            width="360px"
                            height="54.54px"
                            backgroundColor="black"
                            hoverBackgroundColor="#7EFFB2CF"
                            hoverTextColor="black"
                            textColor="white"
                        />
                    </div>
                </div>

                <Image
                    className="cursor-pointer transition-all duration-500 absolute right-[-18px] top-[-18px]"
                    src="/assets/images/icon-exit.png"
                    alt="close"
                    width={72}
                    height={72}
                    priority
                    onClick={onClose}
                />
            </div>
        </div>
    );
};

export default ModalRegister;


