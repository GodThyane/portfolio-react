import React from 'react';
import "./Navbar.css"
import useScrollHeight from "../../hooks/useScrollHeight";

const Navbar = () => {

    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

    const scrollHeight = useScrollHeight();


    return (
        <nav className={`navbar ${scrollHeight > 50 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>José Daza Díaz</div>
        </nav>
    );
};

export default Navbar;
