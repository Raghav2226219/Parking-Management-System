import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/SignUp.css';

const SignUp = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phonenumber: 0,
        password: '',
        role: 'user',
    });

  
    const [responseMessage, setResponseMessage] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post('http://localhost:3000/signup', formData);
            setResponseMessage(response.data.message || 'Signup successful!');
        } catch (error) {
            console.error('Error during signup:', error);
            setResponseMessage(error.response?.data?.message || 'Signup failed. Please try again.');
        }
    };

    return (
        <div>
            <div className="container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone No:</label>
                        <input
                            type="tel"
                            id="phonenumber"
                            name="phonenumber"
                            value={formData.phonenumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role:</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                {responseMessage && <p className="response-message">{responseMessage}</p>}
            </div>
        </div>
    );
};

export default SignUp;
