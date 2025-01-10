import {NextPage} from "next";
import {CSSProperties} from "react";

interface ButtonCustomProps {
    content: string;
    isActive: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    stylesContent?: CSSProperties
}

const ButtonCustom: NextPage<ButtonCustomProps> = ({content, onClick, isActive, stylesContent}) => {

    return (
        <button
            className='relative w-[160px] h-[49px] rounded-[96px] overflow-hidden'
            style={{
                border: 'none',
                background: 'linear-gradient(90deg, #0effB3 5%, #7affB2 20%, #FFFFFF 50%, #7effB2 80%, #2CD9FF 95%)',
                animation: 'rotateBackground 2s ease-in-out infinite',
                boxShadow: '0px 2px 26px 0px rgba(27, 118, 255, 0.37), 0px 2px 33px 0px rgba(0, 255, 56, 0.22)',
            }}
            onClick={onClick}
            disabled={!isActive}
            type="button"
        >
            <div
                className='absolute top-0 left-0 translate-y-[1.5px] translate-x-[1.5px] w-[157px] h-[47px] rounded-[96px] bg-black flex justify-center items-center text-[12px] sm:text-[14px] text-white hover:bg-[#7EFFB2CF] hover:text-black'
                style={stylesContent}
            >{content}
            </div>
        </button>
    );
}
export default ButtonCustom;