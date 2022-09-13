import React from 'react'

import { NavLink } from "react-router-dom"

export default function Navbar() {
    const links = [
        {
          id: 1,
          path: "/",
          text: "Home",
        },
        {
          id: 2,
          path: "/about",
          text: "About",
        },
      ]
    return <>
        <nav className="navBar">
            <ul>
                {links.map((link, id) =>
                    <li key={id}>
                        <NavLink
                            to={link.path}
                            style={({ isActive }) => isActive
                                ? { color: 'orangered', textDecoration: 'underline' }
                                : { color: 'black', textDecoration: 'none' }
                            }
                        >
                            {link.text}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    </>
}