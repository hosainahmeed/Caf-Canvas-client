import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import loginImage from "../../../src/assets/images/login/login.svg";
import useAuth from "../../Components/Hook/useAuth";
import useAxiosPublic from "../../Components/Hook/useAxiosPublic";
function Login() {
  const [showpass, setShowpass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password).then((res) => {
      const loggedinUser = res.user;
      // console.log(loggedinUser);

      const user = { email };

      axiosPublic
        .post("/jwt", user, { withCredentials: true })
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data);
            navigate(location?.state || "/");
          }
        })
        .catch((error) => {
          console.error("Error generating JWT or navigating:", error);
        });
    });
    reset();
  };
  return (
    <div className=" md: flex flex-col-reverse md:flex-row  items-center justify-center gap-12 mx-4">
      {/* <img className="w-72 md:w-96" src={loginImage} /> */}
      <div className="bg-[#13232f]/90 p-10 rounded-lg shadow-lg">
        <h1 className="text-center text-white font-light text-3xl mb-10">
          Welcome Back!
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-10">
            <label className="text-white/50 text-lg">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="text-xl w-full p-2 bg-transparent border border-gray-400 text-white focus:outline-none focus:border-[#ff3811]"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="relative mb-10">
            <label className="text-white/50 text-lg">Set A Password</label>
            <div className="flex items-center justify-between gap-2 border border-gray-400 pr-2">
              <input
                type={showpass ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters",
                  },
                })}
                className="text-xl w-full p-2 bg-transparent text-white focus:outline-none focus:border-[#ff3311]"
                autoComplete="new-password"
              />
              <h1 onClick={() => setShowpass((p) => !p)}>
                {showpass ? (
                  <FaEyeLowVision className="text-[#ff3911c6] text-xl"></FaEyeLowVision>
                ) : (
                  <FaEye className="text-[#ff3811] text-xl"></FaEye>
                )}
              </h1>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <p className="text-right text-white mb-4">
            <a href="#" className="hover:text-[#ff3811]">
              Forgot Password?
            </a>
          </p>

          <button
            type="submit"
            className="w-full bg-[#ff3811] text-white p-4 text-2xl font-bold hover:bg-[#ff3511c9] transition-all"
          >
            Log In
          </button>
        </form>
        <h1 className="text-white mt-6">
          Dont have an account?
          <Link
            to="/signup"
            className="text-[#ff3811] text-sm md:text-base hover:underline ml-2"
          >
            Go to Sign up
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Login;
