import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";


const Login = () => {

    const { signInUser , googleSignIn } = useContext(AuthContext);
    
    // const location = useLocation();
    // console.log("location vai" , location);
    // const from = location.state?.from?.pathname || "/";
  
    const navigate = useNavigate();
  
    const handlSubmit = (e) => {
    //   console.log(data);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast.success("Login successfully");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };
    const handleGoogleUser = () => {
        googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successfully");
        navigate(   "/"  );
      })
      .catch((error) => {
        toast.error(error.message);
      });
    }
    return (
        <div>
        <div className="max-w-2xl mx-6 lg:mx-auto">
          <h1 className="text-4xl font-bold mt-10"> My Account</h1>
          <h3 className="text-3xl font-bold mt-6 mb-4">Login</h3>
  
          <form onSubmit={handlSubmit}>
            <div>
              <label className="text-lg font-semibold">Email Address</label>
              <input
                type="email"
                className="w-full h-[40px] border border-solid border-orange-600 rounded text-lg font-semibold pl-3"
                name="email"
                required
                placeholder="Enter Your Email"
              />
            </div>
  
            <div className="mt-2">
              <label className="text-lg font-semibold">Password</label>
              <input
                type="password"
                className="w-full h-[40px] border border-solid border-orange-600 rounded text-lg font-semibold pl-3"
                name="password"
                required
                placeholder="Enter Your Password"
              />
            </div>
  
            
            <Link
              to="/signup"
              className="text-lg font-semibold text-green-600 hover:underline block mt-2"
            >
              Are you new here ? please signup
            </Link>
  
  
            <button className="btn bg-green-600 text-white lg:w-[315px] w-full mt-2 hover:bg-green-700">
              Submit
            </button>
          </form>
          
          <div className="max-w-[300px] mt-3">
          <FcGoogle className="text-3xl  hover:cursor-pointer mx-auto"onClick={handleGoogleUser} />
          </div>
         
        </div>
  
        
      </div>
    );
};

export default Login;