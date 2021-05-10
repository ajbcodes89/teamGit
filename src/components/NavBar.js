import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navBar">
            <ul>
                
                <div><Link to="/">Home</Link></div>
                <button><Link to="/coordinates">Get Location</Link></button>
                <div><Link to="/nasa">Nasa</Link></div>

            </ul>
        </div>
    )
}
