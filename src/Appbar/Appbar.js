import React from 'react';
import { Link } from 'react-router-dom';
import './Appbar.css';
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Appbar = () => {
    let navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault()
        sessionStorage.removeItem("user")
        navigate("/login")
    }
    return(
        <div>
            <div class="appbar">
                <div >Home</div>
                <div >Shop</div>
                <div >Contact</div>
                <div class="appbar-middle">Dummy Shop</div>
                <div class="cart">
                    <LocalMallOutlinedIcon style={{fontSize:'50px'}}/>
                </div>
                <div onClick={logout} class="profile">
                    <AccountCircleIcon style={{fontSize:'50px'}}/>
                </div>
            </div>
        </div>
    );
}

export default Appbar;