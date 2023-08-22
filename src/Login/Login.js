import React, { useState } from 'react';
import Home from '../Home/Home';
import { Link,useNavigate } from 'react-router-dom';
import './Login2.css';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    let navigate = useNavigate();

    const login = (e) => {
        e.preventDefault()
        
        let localVal = JSON.parse(localStorage.getItem('data'))
       
        localVal.forEach((element)=>{
            if(element.email === email){
                if(element.password === password){
                    sessionStorage.setItem("user",element.name)
                    navigate('/home')
                }else{
                    alert('wrong password')
                }
            }
        })

        if(sessionStorage.getItem('user') == null){
            alert('User does not exists.')
        }
        setEmail('')
        setPassword('')
    }

    return (
        <div class="login-parent">
            <div class="login-image">
                <img 
                    src="https://freerangestock.com/sample/61264/online-shopping--laptop-to-shopping-cart.jpg"    
                />
            </div>
            <div class="login-form">
                <h1>Login</h1>
                <input 
                    type="email"  
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                 />
                {/* <label>Password</label> */}
                <input 
                    type="password"  
                    name="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button onClick={login}>Login</button>
                <Link to="/register"><span>Forgot Password?</span></Link>
                <Link to="/register"><span>Don't have an account?</span></Link>
            </div>
        </div>
    );
}

export default Login;