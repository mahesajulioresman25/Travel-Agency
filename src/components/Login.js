import React from 'react'

const Login = () => {
    return (
        <section className="showcase login">
            <div className="overlay">
                <h4>Login</h4>
                <form className="form">
                    <input type='email' 
                            name='email' 
                            id='email' 
                            placeholder='Email' 
                            required>
                    </input>
                    <input type='password' 
                            name='password'
                            id='password'  
                            placeholder='Password' 
                            required>
                    </input>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login
