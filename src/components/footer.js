import React from "react"
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import "../styles/footer.css"


const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-child">
                <FaFacebookSquare/>
                <FaTwitterSquare/>
            </div>
            <div className="footer-child">
                *Mad Beatz Letter Logo*
            </div>
            <div>
                <h1>Sign up for emails</h1>
                <input type="text"></input>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Footer;
