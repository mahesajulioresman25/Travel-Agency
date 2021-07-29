import React from 'react'

const SignUp = () => {
    return (
    <section className="showcase signup">
            <div className="overlay">
                <h4>Sign-up</h4>
                <form className="form">
                    <input type='username' 
                            name='username' 
                            id='username' 
                            placeholder='Username' 
                            required>
                    </input>
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
                    <input type='password' 
                            name='password'
                            id='password'  
                            placeholder='Confirm password' 
                            required>
                    </input>
                    <button type='submit'>Create your account</button>
                </form>
            </div>
        </section>
    )
}

export default SignUp
