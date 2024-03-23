import Slider from "react-slick";
import { useGetCastsQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";
import { castSliderSettings } from "../../components/Tools/SliderSettings";
import style from "./cast.module.css"

function Cast({ id }) {
    const { data: castsData, isLoading, isError } = useGetCastsQuery({ type: "movie", id }, { skip: !id });
    let content;

    if (isLoading) content = <Loading />

    if (isError) content = "Data fetching error";

    console.log(castsData)
    if (!isLoading && !isError && castsData.id) {
        content = castsData.cast.map(item => {
            return (
                <div key={item.id}>
                    <div className={`${style.castContainer} flex items-center space-x-2 justify-center`}>

                        <img className={`${style.castImage} w-24 h-32 rounded-full p-[1px]`} src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="" srcSet="" />

                        <p className={`${style.CastText} flex flex-col`}>
                            <span className="text-xl">{item.original_name}</span>
                            <span className="text-gray-500 text-sm">{item.character}</span>
                        </p>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="slider-container mb-10">
            <Slider {...castSliderSettings}>
                {content}
            </Slider>
        </div>
    )
}

export default Cast;