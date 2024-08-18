import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { BiMenu } from "react-icons/bi";

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
                <div><BiMenu className="text-3xl text-white font-bold"></BiMenu></div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-400 text-white rounded-none z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to="/">Home</NavLink></li>
              </ul>
          </div>
          <Link to="/"className="font-semibold text-white">মুগ্ধ ভাইয়ের দোকান</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/"className="text-lg font-semibold text-white">Home</NavLink></li>
            
          </ul>
        </div>
        <div className="navbar-end">
            {user ? <button className="btn px-4 rounded-none"onClick={handleLogout}>Logout</button> : <Link to="/login"><button className="btn px-6 rounded-none">Login</button></Link>}
        </div>
      </div>
    );
};

export default Navbar;