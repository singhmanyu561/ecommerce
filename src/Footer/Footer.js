import React from 'react';
import './Footer.css'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
const Footer = () => {

    return(
        <div class="footer-parent">
            <div class="footer-links">
                <div>Home</div>
                <div>Shop</div>
                <div>Contact</div>
                <div>Policy</div>
                <div>FAQs</div>
            </div>
            <div class="footer-social-connect">
                <img src={fb}/>
                <img src={insta}/>
                <img src={twitter}/>
                <img src={youtube}/>
            </div>
            <br/>
            <div class="footer-copyright">
                <p>&#169; 2023 ShopEXPRESS, Inc. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;