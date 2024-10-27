import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../Components/Hook/useAuth";
// import signupimage from "../../../src/assets/images/login/login.svg";
const Signup = () => {
  const [showpass, setShowpass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { createUser } = useAuth();
  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password);
    reset();
  };

  return (
    <div className=" md: flex flex-col md:flex-row  items-center justify-center gap-12 mx-4">
      {/* <img src={signupimage} className="w-72 md:w-96" /> */}
      <div className="bg-[#13232f]/90 p-10  rounded-lg shadow-lg">
        <div>
          <h1 className="text-center text-white font-light text-3xl mb-10">
            Sign Up for Free
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-x-4 mb-10">
              <div className="relative w-full">
                <label className="text-white/50 text-lg">Name</label>
                <input
                  placeholder=""
                  type="text"
                  {...register("name", {
                    message: "Invalid name  ",
                    required: "Name is required",
                  })}
                  className="text-xl w-full p-2 bg-transparent border border-gray-400 text-white focus:outline-none focus:border-[#ff3311]"
                  autoComplete="given-name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
            </div>

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
                className="text-xl w-full p-2 bg-transparent border border-gray-400 text-white focus:outline-none focus:border-[#ff3311]"
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
                    <FaEyeLowVision className="text-lime-500 text-xl"></FaEyeLowVision>
                  ) : (
                    <FaEye className="text-lime-400 text-xl"></FaEye>
                  )}
                </h1>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 text-white p-4 text-2xl font-bold hover:bg-lime-500 transition-all"
            >
              Get Started
            </button>
          </form>
        </div>
        <h1 className="text-white text-sm md:text-base mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-lime-400 hover:underline">
            Go to login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Signup;