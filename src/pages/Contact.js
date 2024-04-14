import React from "react";
import Wine from "../assets/Wine.png"
import "../styles/Contact.css"

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${Wine})`}}></div>
            <div className="rightSide">
                <h1> Contact </h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name"> Volledige naam </label>
                    <input name="name" placeholder="Geef je volledige naam..." type="text" />
                    <label htmlFor="email"> Email </label> 
                    <input name="email" placeholder="Geef je email op..." type="email" />
                    <label htmlFor="message"> Extra info </label>
                    <textarea rows="6" placeholder="Extra info..." name="message" required></textarea>
                    <button type="submit"> Verstuur bericht </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
