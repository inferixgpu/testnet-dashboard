import "@/app/styles/gridGPU.scss";
import GPUCard from "@/components/GPUCard";
import {useEffect, useState} from "react";

const GridGPU = () => {
    const data = [
        {
            brand: "Nvidia GPUs",
            name: "H100",
            quantity: 88,
            staking: 64,
            ifx: 180000.00,
            usdt: 9000,
            k: 147.84,
            ib: 2.41346
        },
        {
            brand: "Nvidia GPUs",
            name: "A100 40G",
            quantity: 1,
            staking: 0,
            ifx: 100398.41,
            usdt: 5020,
            k: 82.46,
            ib: 1.34615
        },
        {
            brand: "Nvidia GPUs",
            name: "GeForce RTX 3090",
            quantity: 14,
            staking: 4,
            ifx: 28685.26,
            usdt: 1434,
            k: 23.56,
            ib: 0.38462
        },
        {
            brand: "Nvidia GPUs",
            name: "GeForce RTX 4090",
            quantity: 1,
            staking: 0,
            ifx: 37290.84,
            usdt: 1865,
            k: 30.63,
            ib: 0.50000
        },
    ];
    const totalHashRate = data.reduce((total, item) => total + item.staking * item.ib, 0);
    const [isShowMore, setIsShowMore] = useState(false);
    const [dataPublic, setDataPublic] = useState([...data.slice(0,3)]);

    useEffect(() => {
        if (isShowMore) {
            setDataPublic([...data]);
        } else {
            setDataPublic([...data.slice(0,3)]);
        }
    }, [isShowMore]);
    const handleSetIsShowMore = () => {
        setIsShowMore(!isShowMore)
    }
    return (
        <div className={'gpu-container'}>
            <div className={'gpu-grid'}>
                {dataPublic.map((gpu, index) => (
                    <GPUCard key={index} data={gpu} totalHashRate={totalHashRate} index={index}/>
                ))}
            </div>
            <div className={'showmore'}>
                <span></span>
                <button onClick={handleSetIsShowMore}>{isShowMore ? "Show less" : "Show more"}</button>
            </div>
        </div>
    );
};
export default GridGPU;