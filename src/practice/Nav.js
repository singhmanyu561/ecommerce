import React from 'react';
import './Nav.css'

const Nav = () => {
    return(
        <div class="nav-parent">
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <button id="nav-login">login</button>
            </nav>
        </div>
    );
}

export default Nav;