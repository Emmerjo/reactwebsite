import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer"> 
            <div className="socialMedia">
                <FacebookIcon /> <InstagramIcon /> <XIcon /> <LinkedInIcon />
            </div>
            <p> &copy; 2024 Emmerjo Projects</p>
        </div>
    );
}

export default Footer;
