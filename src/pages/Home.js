import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Food.jpg"
import "../styles/Home.css"

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1> Le Soleil </h1>
                <p> Werelds genieten in hartje Lommel </p>
                <Link to="/menu">
                    <button> Bestellen </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;