import React from "react";
import { useForm, Controller } from "react-hook-form";

const Signup = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Left Section: Custom Blue Background */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-[rgb(6,23,93)] to-[rgb(6,23,93)] text-white p-8">
          <h1 className="text-3xl font-bold mb-4">WELCOME!</h1>
          <p className="text-sm text-center mb-6">
            Already have an account? Log in now and get started!
          </p>
          <button className="bg-white text-[rgb(6,23,93)] font-semibold py-2 px-6 rounded-full hover:bg-gray-100">
            LOGIN
          </button>
        </div>

        {/* Right Section: Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            
            {/* Username Field */}
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="username">
                Username
              </label>
              <Controller
                name="username"
                control={control}
                rules={{ required: "Username is required" }}
                render={({ field }) => (
                  <div className="flex items-center border-2 border-[rgb(6,23,93)] rounded-lg p-2 gap-2 shadow-sm">
                    <span className="text-[rgb(6,23,93)]">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      {...field}
                      type="text"
                      placeholder="Enter your username"
                      className="w-full outline-none bg-transparent text-gray-800"
                    />
                  </div>
                )}
              />
              {errors.username && (
                <span className="text-red-500 text-sm">
                  {errors.username.message}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                }}
                render={({ field }) => (
                  <div className="flex items-center border-2 border-[rgb(6,23,93)] rounded-lg p-2 gap-2 shadow-sm">
                    <span className="text-[rgb(6,23,93)]">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full outline-none bg-transparent text-gray-800"
                    />
                  </div>
                )}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="password">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                }}
                render={({ field }) => (
                  <div className="flex items-center border-2 border-[rgb(6,23,93)] rounded-lg p-2 gap-2 shadow-sm">
                    <span className="text-[rgb(6,23,93)]">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      className="w-full outline-none bg-transparent text-gray-800"
                    />
                  </div>
                )}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Please confirm your password",
                }}
                render={({ field }) => (
                  <div className="flex items-center border-2 border-[rgb(6,23,93)] rounded-lg p-2 gap-2 shadow-sm">
                    <span className="text-[rgb(6,23,93)]">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      {...field}
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full outline-none bg-transparent text-gray-800"
                    />
                  </div>
                )}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="bg-[rgb(6,23,93)] hover:bg-[#041b6e] text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <i className="fas fa-user-plus"></i> SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
