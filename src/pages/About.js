import React from "react";
import Beef from "../assets/Beef.jpg";
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${Beef})` }}></div>
            <div className="aboutBottom">
                <h1> Over ons </h1>
                <p>
                    Wij van restaurant Le Soleil Lommel serveren u eigentijdse gerechten op basis van de klassieke keuken. Bereidingen van pure verse ingrediënten met een flirt van exotische producten en wereldse recepten. Begeleid door fijne wijnen of helder Belgisch bier.
                </p>
            </div>
        </div>
    )
}

export default About;
