import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault()
        
        var array = []

        const obj = {
            'name':name,
            'email':email,
            'phone':phone,
            'password':password
        }

        //getting data from 
        let localVal = localStorage.getItem('data')
        console.log(localVal)
        if(localVal == null){
            array.push(obj)
        }else{
            array = array.concat(JSON.parse(localVal))
            array.push(obj)
        }

        //setting details in local storage
        localStorage.setItem('data',JSON.stringify(array))

        setName('')
        setEmail('')
        setPhone('')
        setPassword('')

        navigate("/login")
    }

    return (
        <div class="register-parent">
            <div class="register">
                <h1>Register</h1>
                <form >
                    <input 
                        type="text"  
                        name="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                    <br/>
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
                        type="text"  
                        name="phone" 
                        value={phone} 
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Phone"
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
                </form>
                <br/>
                <button onClick={submitForm}>Login</button>
                <br/><br/>
                <Link to="/login">Already have an account?</Link>
            </div>
        </div>
    );
}

export default Register;