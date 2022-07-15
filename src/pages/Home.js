import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner4.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Chillies </h1>
        <p> Vì Sao </p>
        <Link to="/menu">
          <button> Trải nghiệm </button>
        </Link>
      </div>
    </div>
  );
}

export default Home