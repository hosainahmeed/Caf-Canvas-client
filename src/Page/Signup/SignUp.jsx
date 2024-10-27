import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Components/Hook/useAuth";

function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    createUser(email, password);
    reset();
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col w-full">
        <h1 className="text-4xl font-black">Sign Up</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <input
                className="input text-xl input-bordered"
                type="text"
                placeholder="User name"
                {...register("username", {
                  required: "User Name is required",
                  maxLength: 80,
                })}
              />
              {errors.username && (
                <span className="text-red-500 text-sm">
                  {errors.username.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <input
                className="input text-xl input-bordered"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <input
                className="input text-xl input-bordered"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-base"
                >
                  Already have an account ?
                  <span className="text-xl ml-2">Go to Login</span>
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-[#372727] text-white font-black text-xl"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
