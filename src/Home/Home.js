import React from "react";
import { useNavigate,Link } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import './Home.css';
import Carousel from '../Carousel/Carousel';
import Footer from "../Footer/Footer";
import { CategoryData } from "../Data/CategoryData";
const Home = () => {
    
    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/home/${e.target.name}`)
    }
    return(
        <div class="home-parent">
            <Appbar />
            <Carousel />
            <div class="home">
            {
                CategoryData.map((data,index) => (
                    <div class="category-parent-main">
                        <Link to={`/home/${data.name}`} class="home-link">
                            <div class="category-parent">
                                <div class="child" style={{backgroundImage: `url(${data.img})`}}></div>
                            </div >
                        </Link>
                        <button onClick={handleClick} name={data.name}>{data.text}</button>
                    </div>
                ))
            }
            </div>
            <Footer />
        </div>
    );
}

export default Home;