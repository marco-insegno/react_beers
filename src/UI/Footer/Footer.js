import React from 'react'
import './Footer.css'   


function Footer() {
    return (
        <div className="container-fluid px-0 sticky-bottom" variant="dark">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 footer-custom px-3">
                <p className="col-md-4 mb-0" style={{ color : 'var(--color-white)' }}>© 2023 | SmarcodE</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src="/logo.png" height="50px" alt="logo"/>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2">All Beers</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2">About</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer