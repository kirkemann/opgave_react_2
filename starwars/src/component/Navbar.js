import React  from 'react'
import { Link, NavLink } from 'react-router-dom'
import Starwarlogo from '../Star_Wars_Logo.svg'

const Navbar = () => {
    return (
        <nav className="nav-wrapper yellow darken-3">
        <div className="container">
            <a className="brand-logo logo"><img src={Starwarlogo} alt="Starwars Logo"/></a>
            <ul className="right">
                <li><Link to="/">Forside</Link></li>
                <li><NavLink to="/Starwars">Starwars</NavLink></li>
                <li><NavLink to="/planets">Planets</NavLink></li>
                <li><NavLink to="/Films">Films</NavLink></li>
                <li><NavLink to="/Starships">Starships</NavLink></li>
            </ul>
        </div>

        </nav>
    )
}

export default Navbar