import BannerText from "./BannerText";
import { useGetMovieDetailsQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../accessories/Loading";
import NotFoundError from "../accessories/NotFoundError";
import InitialLoading from "../../UI/WelcomeText";


function Banner({ id }) {
    const { data: MovieDetails, isLoading, isError, error } = useGetMovieDetailsQuery({ id, type: "movie" });
    console.log(id)
    let content;
    if (isLoading) {
        content = <InitialLoading />
    }
    if (isError) {
        content = <NotFoundError message="data" />
    }
    if (!isLoading && !isError && MovieDetails) {
        content = <BannerText movie={MovieDetails} />
    }
    return (
        <div className="w-full absolute top-0 flex items-center justify-center z-20 bg-[#000000c1] h-full bg-blend-multiply">
            <div className="container -mt-10">
                {content}
            </div>
        </div>
    );
}

export default Banner;