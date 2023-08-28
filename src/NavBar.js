import React from "react";
import { NavLink } from "react-router-dom";


/** Creates a list of Nav items for each snack in the snack list
 *
 * props: snacks (array of snack items)
 *
 * state: none
 *
 * App > NavBar
 */

function NavBar({ snacks }) {

  let activeStyle = {
    "font-weight": "bold"
  };

  return (
    <nav className="NavBar">
      <NavLink to='/' style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
        Home
      </NavLink>

      {snacks.map(snack => (<NavLink to={`/${snack}`} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
        {snack}
      </NavLink>
      ))}
    </nav>


  )
}

export default NavBar;

