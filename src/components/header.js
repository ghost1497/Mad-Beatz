import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"

const Header = ({siteTitle}) => (
    <header className="header">

        <h1>
            <Link
                to="/"
            >
                {siteTitle}
            </Link>
        </h1>
        <div className="header-right">
            <Link to="/vision">
                Vision
            </Link>
            <Link to="/story">
                Story
            </Link>
            <Link to="/media">
                Media
            </Link>
            <Link to="/contact">
                Contact
            </Link>
            <Link to="/bookus">
                Book Us
            </Link>
        </div>

    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '../images/gatsby-icon.png',
    style: {
        color: `blue`,
        textDecoration: `none`,
    }
};


export default Header
