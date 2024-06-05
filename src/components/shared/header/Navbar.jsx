import { useLocation, Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import style from "../../../style/navbar.module.css";
import logo from "../../../assets/Logo/logo.png";
import "../../../style/animation.css"
import SinglePath from "./singlePath";
import useScrollPosition from "../../accessories/useScrollPosition";
import toast from "react-hot-toast";

function Navbar() {
    const scrollY = useScrollPosition();
    const CurrentPath = useLocation().pathname;

    const allPathLinks = [{ title: "Movies", path: "/movies" }, { title: "TV Shows", path: "/tvshows" }, { title: "Genres", path: "" }]


    const maxScroll = 500;
    const opacity = Math.min(scrollY / maxScroll, 1);
    toast(scrollY)
    return (
        <div className={`h-20 w-full z-50 flex items-center justify-center ${CurrentPath === "/" ? "fixed top-0" : `sticky top-0`} ${scrollY ? `${style.positionedBg}` : `${style.positionedBgTranspa}`}`}>

            <div className={`w-full z-50`}
            >
                <div className="flex items-center justify-between container mx-auto">
                    <div className="flex items-center space-x-10">
                        <Link exact to="/" className={style.logo}>
                            <img src={logo} alt="search" width={80} height={80} />
                        </Link>

                        {allPathLinks.map(item => <SinglePath key={item.title} link={item} />)}
                    </div>
                    <div className="flex items-center space-x-10">

                        {/* Auth buttons */}
                        <button className={`${style.activeLink}`}>Login</button>
                        <button className={`${style.activeLink}`}>Join Us</button>
                        <button className={style.SearchBtn}><IoSearchSharp className="text-2xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

