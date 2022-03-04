import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg justify-content-between shadow-lg p-2 mb-5 bg-white rounded ">
                <a className="navbar-brand" href="#">SHEY PIZZA</a>

                {/* <div className="collapse navbar-collapse " id="navbarNav"> */}
                <ul className="navbar-nav ml-auto " style={{ "display": "flex", "width": "200px", "flexDirection": "row", "justifyContent": "space-around" }}>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cart</a>
                    </li>

                </ul>
                {/* </div> */}
            </nav>
        </>
    )
}
