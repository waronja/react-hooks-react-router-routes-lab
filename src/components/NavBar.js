import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
      >
        Movies
      </NavLink>
      <NavLink
        to="/actors"
        exact
      >
        Actors
      </NavLink>
      <NavLink
        to="/directors"
        exact
      >
        Directors
      </NavLink>
    </div>

  ) 
}

export default NavBar;