import React, { useState } from 'react';

const Register = () => {

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
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={submitForm}>
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
                    type="number"  
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
                <input type="submit" />
            </form>
        </div>
    );
}

export default Register;