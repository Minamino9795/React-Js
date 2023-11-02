import React, { useState } from 'react';

const SignUp = () => {
    const [form, setForm] = useState({});
    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }
    function handleSubmit() {
        const isValid = form.username && form.email && form.password && form.confirmPassword;
        alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div className="custom-input">
                    <label>User name:</label>
                    <input name='username' value={form.username || ''} onChange={handleChange} />
                </div>
                <div className="custom-input">
                    <label>Email:</label>
                    <input name='email' value={form.email || ''} onChange={handleChange} />
                </div>
                <div className="custom-input">
                    <label>Password:</label>
                    <input name='password' value={form.password || ''} onChange={handleChange} />
                </div>
                <div className="custom-input">
                    <label>Confirm Password:</label>
                    <input type='password' name='confirmpassword' value={form.confirmpassword || ''} onChange={handleChange} />
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
