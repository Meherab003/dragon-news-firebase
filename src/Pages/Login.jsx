import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {Login} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("location is the login page", location)
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // console.log(form.get("email"));

    const email = form.get("email")
    const password = form.get("password")

    Login(email, password)
    .then(res => {
        console.log(res.user);

        //Navigate after login
        navigate(location?.state ? location.state : '/')
    })
    .catch(err => {
        console.error(err)
    })
  };

  return (
    <div className="min-h-screen bg-base-200">
      <NavBar></NavBar>
      <div className="hero mt-10">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">

              {/* Form */}
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="text-blue-500  label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>

              <p>
                Dont have an account? <Link className="text-blue-500 hover:text-blue-800 hover:underline" to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
