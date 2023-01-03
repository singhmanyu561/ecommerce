import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault()
        sessionStorage.removeItem("user")
        navigate("/login")
    }
    return(
        <div class="home">
            <h1>Welcome, {sessionStorage.getItem('user')}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;