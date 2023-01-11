import React from "react";
// import { useNavigate } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import './Home.css';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    
    return(
        <div class="home-parent">
            <Appbar />
            <Carousel />
            <div class="home">
                <div class="parent">
                    <div class="child">
                        <button>SHOP MEN</button>
                    </div>
                </div >
                <div class="parent">
                    <div class="child">
                        <button>SHOP WOMEN</button>
                    </div>

                </div>
                <div class="parent">
                    <div class="child">
                        <button>SHOP KIDS</button>
                    </div>

                </div>
                <div class="parent">
                    <div class="child">
                        <button>SHOP HOMES</button>
                    </div>

                </div>
                <div class="parent">
                    <div class="child">
                        <button>SHOP HOMES</button>
                    </div>

                </div>
                <div class="parent">
                    <div class="child">
                        <button>SHOP HOMES</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;