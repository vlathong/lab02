import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
          <div className="socialMedia"><InstagramIcon/> <FacebookIcon/><TwitterIcon/>
            
          </div>
          <p> &copy; 2022 nhacnhushit.com</p>
        </div>
      );
}

export default Footer