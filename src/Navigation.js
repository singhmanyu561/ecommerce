import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';

const Navigation = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/register" element={<Register/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route exact path="/" element={<Login/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default Navigation;