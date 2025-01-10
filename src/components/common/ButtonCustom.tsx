import { NextPage } from "next";
import { CSSProperties } from "react";

interface ButtonCustomProps {
    content: string;
    isActive: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    stylesContent?: CSSProperties;
    width?: string;
    height?: string;
    backgroundColor?: string; 
    hoverBackgroundColor?: string; 
    textColor?: string; 
    hoverTextColor?: string; 
}

const ButtonCustom: NextPage<ButtonCustomProps> = ({
    content,
    onClick,
    isActive,
    stylesContent,
    width = "160px",
    height = "49px",
    backgroundColor = "black",
    hoverBackgroundColor = "#7EFFB2CF",
    textColor = "white",
    hoverTextColor = "black",
}) => {
    return (
        <button
            className="relative rounded-[96px] overflow-hidden"
            style={{
                border: "none",
                background: "linear-gradient(90deg, #0effB3 5%, #7affB2 20%, #FFFFFF 50%, #7effB2 80%, #2CD9FF 95%)",
                animation: "rotateBackground 2s ease-in-out infinite",
                boxShadow: "0px 2px 26px 0px rgba(27, 118, 255, 0.37), 0px 2px 33px 0px rgba(0, 255, 56, 0.22)",
                width,
                height,
            }}
            onClick={onClick}
            disabled={!isActive}
            type="button"
        >
            <div
                className="absolute top-0 left-0 translate-y-[1.5px] translate-x-[1.5px] rounded-[96px] flex justify-center items-center text-[12px] sm:text-[14px]"
                style={{
                    width: `calc(${width} - 3px)`,
                    height: `calc(${height} - 3px)`,
                    backgroundColor,
                    color: textColor,
                    ...stylesContent,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverBackgroundColor; 
                    e.currentTarget.style.color = hoverTextColor; 
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = backgroundColor; 
                    e.currentTarget.style.color = textColor; 
                }}
            >
                {content}
            </div>
        </button>
    );
};

export default ButtonCustom;
