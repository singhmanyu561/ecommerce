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
                <div class="appbar-middle">ShopEXPRESS</div>
                <span class="appbar-left ">
                    <div class="col-1">Home</div>
                    <div class="col-1">Shop</div>
                    <div class="col-1">Contact</div>
                    <div class="cart col-1">
                        <LocalMallOutlinedIcon id="cart" />
                    </div>
                    <div onClick={logout} class="profile col-1">
                        <AccountCircleIcon id="profile" />
                    </div>
                </span>
                <span class="material-symbols-outlined col-5">
                    menu
                </span>
                
            </div>
        </div>
    );
}

export default Appbar;