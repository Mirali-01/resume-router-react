import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <div>Mir Ali</div>
            <Link to="/resume">
                <div>Resume</div>
            </Link>
        </div>
    )
}

export default Nav