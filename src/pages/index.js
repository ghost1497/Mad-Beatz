import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoBackground from "../components/videobackground";
import {Link} from "gatsby"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <VideoBackground/>
        <div className="home-page-content">
            <h1>Mad Beats Philly</h1>
            <p>Musicians with a mission</p>
            <div>
                <Link to="/vision/">
                    <button>Our Vision</button>
                </Link>
                <Link to="/bookus/">
                    <button>Book Us</button>
                </Link>
            </div>
        </div>
    </Layout>
);

export default IndexPage
