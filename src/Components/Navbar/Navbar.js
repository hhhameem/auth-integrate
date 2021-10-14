import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Navbar = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
      {user.displayName}{" "}
      {user?.email && <button onClick={logOut}>Logout</button>}
    </div>
  );
};

export default Navbar;
