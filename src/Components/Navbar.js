import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import RestaurantIcon from '@material-ui/icons/Restaurant';
function Navbar() {
    return (
        <div className="header">
            <div className="left">
                <RestaurantIcon className="icon"/>
                 <p>Magic<span className="text">Meal</span></p>
            </div>
            <div className="right">
                 <Link to="/" className="header_links">Home</Link>
                <Link to="/menucard" className="header_links">Menu Card</Link>
                 <Link to="/team" className="header_links">Team</Link>
                 <Link to="/news" className="header_links">News and Events</Link>
                
            </div>
        </div>
    )
}

export default Navbar
