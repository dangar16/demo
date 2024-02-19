import React from "react";

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg bg-light mb-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.brand}</a>
            </div>
        </nav>
    )
};

export default Navbar