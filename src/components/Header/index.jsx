import React from "react";
import { signOut } from "firebase/auth";
import { useHistory, NavLink } from "react-router-dom";
import { auth } from "../../firebase";

import "./index.css";

const Header = () => {
    const history = useHistory();

    console.log({ history });

    const handleSignOutClick = () => {
        signOut(auth);
    };

    const handlePostClick = () => {
        setTimeout(() => {
            history.push("/");
        }, 500);
    };

    return (
        <header className="header">
            <nav className="header__navigation">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/about-us">About us</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/add-product">Add product</NavLink>
                <NavLink to="/sign-up">Sign up</NavLink>
                <NavLink to="/sign-in">Sign in</NavLink>
                <a style={{ cursor: "pointer" }} onClick={handleSignOutClick}>Sign out</a>
            </nav>
            <button type="button" onClick={handlePostClick}>Post</button>
        </header>
    );
};

export default Header;