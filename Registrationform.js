 import React, { useState } from 'react';

const Registrationform = () => {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");

    const inputChange = (e) =>{
        // setUser(e.target.value);
    if(e.target.name === "email"){
        console.log(e.target.value);
        setUser(e.target.value);
    }
    if(e.target.name === "password"){
        console.log(e.target.value);
        setPassword(e.target.value);
    }
}
    return (
        <div>
            <form>
                <h2>Sign in</h2>
                <label>Email address</label>
                <br/>
                <input type='email' name='email' placeholder='Enter email' value={user} onChange={inputChange}/>
                <br/>
                <label>Password</label>
                <br/>
                <input type='password' name='password' placeholder='Enter password' value={password} onChange={inputChange}/>
                <br/>
                <input type='checkbox'/>
                <label>Remember me</label>
                <br/>
                <button>Submit</button>
                <br/>
                <label>Forget Password</label>
            </form>
        </div>
    );
};

export default Registrationform;