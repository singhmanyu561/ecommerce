import React, { useState } from 'react';
import Home from '../Home/Home';

const Login = () => {

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [loginFlag,setLoginFlag] = useState(false)

    const login = (e) => {
        e.preventDefault()
        
        let localVal = JSON.parse(localStorage.getItem('data'))
       
        localVal.forEach((element)=>{
            if(element.email === email){
                if(element.password === password){
                    setName(element.name)
                    setLoginFlag(true)
                }else{
                    alert('wrong password')
                }
            }
        })


        setEmail('')
        setPassword('')
    }

    return (
        <div>
            {
                loginFlag ? <Home name={name} /> :

                <div>
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
                </div>
            }
        </div>
    );
}

export default Login;