import React from "react";
import { NavLink } from "react-router-dom";


const DEFAULT_SNACKS = ['chips', 'soda', 'sardines'];

function NavBar({snacks=DEFAULT_SNACKS}) {

  let activeStyle = {
    "font-weight": "bold"
  };

  return (
    <nav>
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

