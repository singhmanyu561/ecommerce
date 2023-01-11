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
                <div class="col-1">Home</div>
                <div class="col-1">Shop</div>
                <div class="col-1">Contact</div>
                <div class="appbar-middle col-6">Dummy Shop</div>
                <div class="cart col-1">
                    <LocalMallOutlinedIcon style={{fontSize:'50px'}}/>
                </div>
                <div onClick={logout} class="profile col-1">
                    <AccountCircleIcon style={{fontSize:'50px'}}/>
                </div>
            </div>
        </div>
    );
}

export default Appbar;