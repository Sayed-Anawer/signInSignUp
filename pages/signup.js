import React, { useState, useEffect } from "react";
import Link from "next/link";
const signup = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // Form Handle Change Function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Form Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormErrors(validate(formValues));
    setFormValues(initialValues);
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (formErrors.length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  // Form Validation Function
  const validate = (allTheFormValues) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // Checking UserName
    if (!allTheFormValues.username) {
      errors.username = "Username is required";
    }
    if (!allTheFormValues.email) {
      errors.email = "email is required";
    }
    if (!allTheFormValues.password) {
      errors.password = "password is required";
    }
    if (!allTheFormValues.confirm_password) {
      errors.confirm_password = "confirm_password is required";
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="User Name"
              value={formValues.username}
              onChange={handleChange}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              value={formValues.confirm_password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-red-400 text-blue focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="hover:underline border-b border-blue text-blue-600  cursor-pointer">
                Sign in
              </span>
            </Link>
            .
          </div>
        </div>
      </div>
    </form>
  );
};

export default signup;
