import React from 'react'
import "../Styles/Login.css"

const Login = () => {
  return (

    <>
   <div class="container">
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"></input>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"></input>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>

    </>
  )
}

export default Login