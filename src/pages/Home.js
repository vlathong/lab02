import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner3.jpg";
//import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Avicii </h1>
        <p> Waiting For Love </p>
        <Link to="/menu">
          <button> Trải nghiệm </button>
        </Link>
      </div>
    </div>
  );
}

export default Home