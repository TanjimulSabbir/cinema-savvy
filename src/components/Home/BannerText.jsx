import BannerText01 from "./BannerText01";
import BannerText02 from "./BannerText02";

function BannerText({ movie }) {
    return (
        <div className="">
            <BannerText01 movie={movie} />
            <BannerText02 />
        </div>
    )
}

export default BannerText;