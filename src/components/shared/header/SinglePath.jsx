/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";
import style from "../../../style/navbar.module.css"

export default function SinglePath({ link, hoverEffect, toggleDrawer }) {
    const path = useLocation().pathname;
    if (link.title === "Genres") {
        return <div className="btnContainer">
            <button className={`${hoverEffect} ${style.activeLink} ${path.includes(link.path) ? style.active : ''} flex items-center space-x-3 lg:space-x-0`}>
                {link.icon}
                <span>
                    Genres
                </span>
            </button>
            <div onClick={toggleDrawer} className="absoluteContainer">
                <Genres />
            </div>
        </div>
    }
    return (
        <Link
            onClick={toggleDrawer}
            to={link.path}
            className={`${hoverEffect} ${style.activeLink} ${path.includes(link.path) ? style.active : ''} flex flex-col lg:flex-row`}
        >

            <p className="flex items-center">
                {link.icon}
                <span className="ml-3 lg:ml-0"> {link.title}</span>
            </p>

        </Link>
    )
}
