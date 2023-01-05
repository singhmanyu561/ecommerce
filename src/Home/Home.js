import React from "react";
// import { useNavigate } from "react-router-dom";
import Appbar from "../Appbar/Appbar";

const Home = () => {
    // let navigate = useNavigate();

    // const logout = (e) => {
    //     e.preventDefault()
    //     sessionStorage.removeItem("user")
    //     navigate("/login")
    // }
    return(
        <div class="home">
            <Appbar/>
            <h1>Welcome, {sessionStorage.getItem('user')}</h1>
        </div>
    );
}

export default Home;