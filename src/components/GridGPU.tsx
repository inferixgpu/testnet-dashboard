import "@/app/styles/gridGPU.scss";
import GPUCard from "@/components/GPUCard";
import { useEffect, useState } from "react";
import gpuData from "@/components/common/DataGPU"

const GridGPU = () => {
    const totalHashRate = gpuData.reduce((total, item) => total + item.staking * item.ib, 0);
    const [isShowMore, setIsShowMore] = useState(false);
    const [dataPublic, setDataPublic] = useState([...gpuData.slice(0, 3)]);

    useEffect(() => {
        if (isShowMore) {
            setDataPublic([...gpuData]);
        } else {
            setDataPublic([...gpuData.slice(0, 3)]);
        }
    }, [isShowMore]);

    const handleSetIsShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return (
        <div className="gpu-container">
            <div className="gpu-grid">
                {dataPublic.map((gpu, index) => (
                    <GPUCard key={index} data={gpu} totalHashRate={totalHashRate} index={index} />
                ))}
            </div>
            <div className="showmore">
                <span></span>
                <button onClick={handleSetIsShowMore}>{isShowMore ? "Show less" : "Show more"}</button>
            </div>
        </div>
    );
};

export default GridGPU;
