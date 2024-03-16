import BannerText01 from "./BannerText01";
import BannerText02 from "./BannerText02";

function BannerText({movie}) {
    return (
        <div className="">
            <div className="flex items-center justify-between">
                <BannerText01 movie={movie}/>
                <BannerText02 />
            </div>
        </div>
    )
}

export default BannerText;