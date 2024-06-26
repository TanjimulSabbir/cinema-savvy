import { IoIosStar } from "react-icons/io";
import playBtn from "../../../assets/images/play-btn.gif"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getYear } from "../../Tools/Others";


function MovieItem({ movie, ClickedMovieDetails, type }) {
    const urlPath = useLocation().pathname;
    const params = useParams().id;

    const { id, original_title, title, release_date, vote_average, adult, poster_path } = movie || {};

    const navigate = useNavigate();

    const handleDetails = (id) => {
        // const pathCheck = ["/movies", "/tvshows"]
        if (!params) {
            return navigate(`/${type}/${id}`)
        } else {
            ClickedMovieDetails(id)
        }
    }

    function hanldeShowDetails() {
        return urlPath !== "/" ? handleDetails(id) : navigate(`/${type}/${id}`)
    }

    return (
        <>
            <div className="downSlider relative itemContainter">
                <div className="relative" onClick={hanldeShowDetails}>
                    <img className="rounded-lg mb-2 px-1 lg:px-2" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                    <div className="absolute inset-0 bg-[#000000c5] flex items-center justify-center text-white opacity-0 transition-opacity duration-500 hover:opacity-100 cursor-pointer">
                        {/* <p>{original_title}</p> */}
                        <img src={playBtn} className="cursor-pointer rounded-lg" alt="" srcSet="" />
                    </div>
                </div>
                <div className="flex items-center justify-between px-3">
                    <p className="overflow-hidden text-nowrap text-ellipsis text-lg">
                        {original_title}
                    </p>
                    <span className="mr-2">{getYear(release_date)}</span>
                    <p>
                        <span className="flex items-center space-x-1">
                            <IoIosStar className="text-yellow-500" />
                            <span>{vote_average.toFixed(1)}</span>
                        </span>
                    </p>
                </div>
                <p className="adult absolute top-0 left-2 bg-red-600 inline-block px-5 backdrop-brightness-0">{adult ? "Adult" : "PG"}</p>
            </div>
        </>
    );
}

export default MovieItem;
