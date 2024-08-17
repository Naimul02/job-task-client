import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

  const {user , logOut} = useContext(AuthContext);


  const handleLogout = () => {
        logOut()
        .then(() => {})
        

  }



    return (
        <div className="navbar bg-blue-400 lg:px-20 mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <Link to="/"className="btn">Home</Link>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to="/login">Login</NavLink></li>
              
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link to="/"className="btn">Home</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/login">Login</NavLink></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
            {user ? <button className="btn"onClick={handleLogout}>Logout</button> : <Link to="/login"><button className="btn">Login</button></Link>}
        </div>
      </div>
    );
};

export default Navbar;