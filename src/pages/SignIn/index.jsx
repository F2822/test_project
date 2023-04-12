import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import useAuth from "../../hooks/useAuth";

import "./index.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isAuth } = useAuth();

    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            return;
        }

        history.push("/");
    }, [isAuth]);

    const handleRegister = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password);
    };

    return (
        <form className="sign-in" onSubmit={handleRegister}>
            <h2>Sign in</h2>
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
            <button type="submit">Send</button>
        </form>
    )
};

export default SignIn;