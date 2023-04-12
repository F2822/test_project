import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import "./index.css";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password);
    };

    return (
        <div className="sign-up">
            <h2>Sign up</h2>
            <label htmlFor="email_input">Email</label>
            <input
                id="email_input"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password_input">Password</label>
            <input
                id="password_input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleRegister}>Send</button>
        </div>
    )
};

export default SignUp;