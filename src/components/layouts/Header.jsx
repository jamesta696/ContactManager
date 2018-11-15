import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

const Header = props => {
    const { branding } = props;

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <Link to="/" className="navbar-brand">
                    <i className="far fa-address-book" /> {branding}
                </Link>

                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo03"
                >
                    <div className="navbar-nav pr-3">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-item nav-link">
                                    <i className="fas fa-home" /> Home{" "}
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item nav-item">
                                <Link to="/contact/add" className="nav-link">
                                    <i className="fas fa-plus" /> Add
                                </Link>
                            </li>
                            <li className="nav-item nav-item">
                                <Link to="/about" className="nav-link">
                                    <i className="fas fa-question" /> About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

Header.defaultProps = {
    branding: "My App"
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
