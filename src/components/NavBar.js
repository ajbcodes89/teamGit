import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <ul>
            
                <div><Link to="/">Home</Link></div>
                <div><Link to="/coordinates">Coordinates</Link></div>
                <div><Link to="/nasa">Nasa</Link></div>
                <div><Link to="/weather">Weather</Link></div>
                
    
            </ul>
        </div>
    )
}
