import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
   
                              


return ( <div>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/category">
          Category
        </NavLink>
        <NavLink to="/source">
        Source
        </NavLink>
        <NavLink to="/favorites">
          Favorites
        </NavLink>
    </div>);
}

export default NavBar;
