import React from "react";
import BannerImage from "../assets/yogaa.png";
import NavBar from "../component/Navbar";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="home-container">
          <NavBar />
          <div className="home-banner-container">
            <div className="home-text-section">
              <h1 className="primary-heading">
                Yoga is the practice of quieting the mind
              </h1>
              <p className="primary-text">
              Discover the transformative power of yoga. Our studio is a sanctuary for individuals seeking balance, flexibility, and inner peace. 
              Whether you're a beginner or an experienced yogi, our classes cater to all levels, providing a holistic approach to wellness.
              </p>
              <button className="secondary-button">
                <Link to="/Register" className="btn-primary">
                Register Now !
                </Link>
                
              </button>
                </div>
                <div className="home-image-section">
                <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
      );
}


export default Home;
