import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import Men from './Category/Men/Men';
import Women from './Category/Women/Women';
import Kids from './Category/Kids/Kids';
import Accessories from './Category/Accessories/Accessories';
import Appliances from './Category/Appliances/Appliances';
import Grocery from './Category/Grocery/Grocery';

const Navigation = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/register" element={<Register/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/home/men" element={<Men/>} />
                    <Route path="/home/women" element={<Women/>} />
                    <Route path="/home/kids" element={<Kids/>} />
                    <Route path="/home/accessories" element={<Accessories/>} />
                    <Route path="/home/appliances" element={<Appliances/>} />
                    <Route path="/home/grocery" element={<Grocery/>} />
                    <Route exact path="/" element={<Login/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default Navigation;