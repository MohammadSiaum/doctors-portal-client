import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import GoogleLogin from "../Google/GoogleLogin";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  // const location = useLocation();
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";

  
  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            toast.success("Sign Up successfully");
            saveUser(data.name, data.email);
            reset();
            // toast.success('Sign Up successfully');
            // reset();
            // navigate('/');
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
        toast.error(error);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("saveuser", data);
        // navigate("/");
        setCreateUserEmail(email);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className=" w-96 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl mb-9 text-center font-semibold text-accent">
          Sign Up
        </h2>
        <div>
          <form onSubmit={handleSubmit(handleSignUp)} className="grid gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Your name is required !",
                })}
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="mt-2 text-red-500">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email address is required !",
                })}
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="mt-2 text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required !",
                  minLength: {
                    value: 8,
                    message: "Password at least 8 characters or longer",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password contains at least 1 upper, lower letter, 1 special character and 1 digit.",
                  },
                })}
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-500 mt-2">{errors.password?.message}</p>
              )}
            </div>

            <div className="form-control mt-2">
              <input
                className="btn btn-accent w-full max-w-xs"
                type="submit"
                value="Sign Up"
              />
            </div>
            <div className="form-contral flex space-x-2 justify-center items-center cursor-pointer">
              <h2 className="label-text font-semibold">
                Already have an account?
              </h2>
              <h2 className="label-text font-semibold text-secondary underline">
                <Link to="/login">Login now</Link>
              </h2>
            </div>
            <div className="form-contral flex space-x-4 justify-center items-center">
              <h2 className="w-32 h-px label-text bg-gray-300 font-semibold">
                {" "}
              </h2>
              <h2 className="label-text text-gray-500 font-semibold">OR</h2>
              <h2 className="w-32 h-px label-text bg-gray-300 font-semibold">
                {" "}
              </h2>
            </div>
          </form>
          <div className="form-control mt-3">
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
