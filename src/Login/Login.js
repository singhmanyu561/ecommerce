import React, { useState } from 'react';
import Home from '../Home/Home';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';

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
        <div>
            <div class="login">
                <h1>Login</h1>
                <form onSubmit={login}>
                    <input 
                        type="email"  
                        name="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <br/>
                    <input 
                        type="password"  
                        name="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        placeholder="password"
                        required
                    />
                    <br/>
                    <input type="submit" name="Login"/>
                </form>
                <br/>
                <Link to="/register">Don't have an account?</Link>
            </div>
        </div>
    );
}

export default Login;