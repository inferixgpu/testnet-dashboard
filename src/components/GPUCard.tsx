import gpuCard from "@/../public/assets/images/card-bg.png";
import gpuCard2 from "@/../public/assets/images/card-bg-2.png";
import "@/app/styles/GPUCard.scss";
import Image from "next/image";
import {useState} from "react";

interface dataProps {
    brand: string;
    name: string;
    quantity: number;
    staking: number;
    ifx: number;
    usdt: number
    k: number;
    ib: number;
}
interface GPUCardProps {
    data: dataProps;
    totalHashRate: number;
    index: number
}

const GPUCard = ({ data, totalHashRate, index }: GPUCardProps) => {
    const dataROI = () => {
        if (data.staking == 0) {
            return 0;
        }
        const dailyReward = (data.ib / totalHashRate) * 625000;
        const rs = ((data.ifx + (dailyReward * 30)) * 0.1) / (data.ifx * 0.05);
        return rs;
    }


    return (
        <div className={'gpu-card'}>
            <Image src={index !== 1 ? gpuCard : gpuCard2} alt={'gpuCard'}/>
            <div className={'info'}>
                <div className={'name'}>
                    <span>{data.brand}</span>
                    <span>{data.name}</span>
                </div>
                <div className={'statics'}>
                    <div className={"p"}>
                        <span>Quantity</span>
                        <span>{data.quantity}</span>
                    </div>
                    <div className={"p"}>
                        <span>Staking</span>
                        <span>{data.staking}</span>
                    </div>
                    <div className={"p"}>
                        <span>30 days ROI</span>
                        <span>{dataROI().toFixed(2)}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GPUCard;