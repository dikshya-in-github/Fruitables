import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <>
            <div className="container-fluid fixed-top">
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2">
                            <small className="me-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#ffb524" }} />
                                <a href="#" className="text-white">
                                    123 Street, New York
                                </a>
                            </small>

                            <small className="me-3">
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffb524" }} />
                                <a href="#" className="text-white">
                                    Email@Example.com
                                </a>
                            </small>
                        </div>

                        <div className="top-link pe-2">
                            <a href="#" className="text-white">
                                <small className="text-white mx-2">Privacy Policy</small>/
                            </a>
                            <a href="#" className="text-white">
                                <small className="text-white mx-2">Terms of Use</small>/
                            </a>
                            <a href="#" className="text-white">
                                <small className="text-white ms-2">Sales and Refunds</small>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <a href="index.html" className="navbar-brand">
                            <h1 className="text-primary display-6">Fruitables</h1>
                        </a>
                        <button
                            className="navbar-toggler py-2 px-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <a href="index.html" className="nav-item nav-link active">
                                    Home
                                </a>
                                <a href="shop.html" className="nav-item nav-link">
                                    Shop
                                </a>
                                <a href="shop-detail.html" className="nav-item nav-link">
                                    Shop Detail
                                </a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                        Pages
                                    </a>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <a href="cart.html" className="dropdown-item">
                                            Cart
                                        </a>
                                        <a href="chackout.html" className="dropdown-item">
                                            Chackout
                                        </a>
                                        <a href="testimonial.html" className="dropdown-item">
                                            Testimonial
                                        </a>
                                        <a href="404.html" className="dropdown-item">
                                            404 Page
                                        </a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">
                                    Contact
                                </a>
                            </div>

                            <div className="d-flex m-3 me-0">
                                <button
                                    className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                                    data-bs-toggle="modal"
                                    data-bs-target="#searchModal"
                                >
                                    <FontAwesomeIcon icon={faSearch} style={{ color: "#679d06" }} />
                                </button>
                                <a href="#" className="position-relative me-4 my-auto">
                                    <FontAwesomeIcon icon={faShoppingBag} size="2x" />
                                    <span
                                        className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                                        style={{
                                            top: "-5px",
                                            left: "15px",
                                            height: "20px",
                                            minWidth: "20px",
                                        }}
                                    >
                                        3
                                    </span>
                                </a>
                                <a href="#" className="my-auto">
                                    <FontAwesomeIcon icon={faUser} size="2x" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
