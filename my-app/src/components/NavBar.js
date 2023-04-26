import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };
                            

return ( <div>
        <NavLink  to="/" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
          Home
        </NavLink>
        <NavLink  to="/arts" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
          Arts
        </NavLink>
        <NavLink  to="/business" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
        Business
        </NavLink>
        <NavLink  to="/health" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
          Health
        </NavLink>
        <NavLink  to="/world" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
          World
        </NavLink>
        <NavLink  to="/favorites" exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
          Favorites
        </NavLink>
    </div>);
}

export default NavBar;
