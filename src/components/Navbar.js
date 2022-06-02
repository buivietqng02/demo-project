import React from "react";
import SearchBox from "./SearchBox";
import { useAppContext } from "./AppContext";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = ({ handleLogout }) => {
  const { isAuthenticated } = useAppContext();
  const location = useLocation();
  console.log("location", location.pathname);
  let email;
  if (isAuthenticated) {
    email = JSON.parse(localStorage.getItem("user")).email;
  }
  return (
    <div className="header">
      {isAuthenticated ? (
        <div>
          {location.pathname === "/shows" ? (
            <SearchBox type="text" placeholder="search by name" />
          ) : (
            ""
          )}
          {/\/shows\/\d+\/episodes$/.test(location.pathname) ? (
            <>
              <SearchBox type="text" placeholder="search by name" />
              <SearchBox type="number" placeholder="search by season No" />
              <SearchBox type="date" placeholder="search by air date" />
            </>
          ) : (
            ""
          )}

          <NavLink
            style={{ marginLeft: "20px" }}
            className="navbar-logout"
            to="/login"
            onClick={handleLogout}
          >
            log out
          </NavLink>
          <span style={{ marginLeft: "100px", color: "rgba(255,255,255,.5" }}>
            Wellcome: {email}
          </span>
        </div>
      ) : (
        <div>
          <NavLink className="navbar-login" to="/login">
            log in
          </NavLink>
          <NavLink
            className="navbar-login"
            style={{ marginLeft: "10px" }}
            to="/signup"
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </div>
  );
};
export default NavBar;
