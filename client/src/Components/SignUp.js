import React from 'react'
import "../Styles/SignUp.css";

const SignUp = () => {
  return (
    <div class="container">
        <h2>Sign Up</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required></input>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div class="form-group">
                <label for="phone">Phone No:</label>
                <input type="tel" id="phone" name="phone" required></input>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <div class="form-group">
                <label for="role">Role:</label>
                <select id="role" name="role" required>
                    <option value="user">User </option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp