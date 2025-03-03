import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchRoles,
  signupUser,
  loginUser,
  checkAuthState,
} from "../store/actions/authActions";

import HeaderShop from "../layout/HeaderShop";
import FooterShop from "../layout/FooterShop";

const SignupLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0: Signup, 1: Login
  const [selectedRole, setSelectedRole] = useState(3); // Default to Customer

  const roles = useSelector((state) => state.auth.roles);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: 3, // Set default role to Customer
      remember: false,
    },
  });

  useEffect(() => {
    dispatch(fetchRoles());
    // dispatch(checkAuthState());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Signup Submit Handler
  const onSignupSubmit = async (data) => {
    try {
      let signupData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: Number(data.role_id),
      };

      if (selectedRole === 2) {
        // Store role
        signupData = {
          ...signupData,
          store: {
            name: data.store.name,
            phone: data.store.phone,
            tax_no: data.store.tax_no,
            bank_account: data.store.bank_account,
          },
        };
      }

      await dispatch(signupUser(signupData));
    } catch (error) {
      // Component-level error handling (e.g., display in the component)
      console.error("Signup failed:", error);
    }
  };

  // Login Submit Handler

  const onLoginSubmit = async (data) => {
    try {
      await dispatch(
        loginUser(data.email, data.password, data.remember) // Correct arguments
      );
    } catch (error) {
      // Component-level error handling
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <HeaderShop isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
          isMenuOpen ? "mt-130 md:mt-0" : "mt-0"
        }`}
      >
        <div className="flex flex-col items-center my-10">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 w-full max-w-md">
            <nav className="flex space-x-4" aria-label="Tabs">
              <button
                onClick={() => handleTabClick(0)}
                className={`${
                  activeTab === 0
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm`}
              >
                Sign Up
              </button>
              <button
                onClick={() => handleTabClick(1)}
                className={`${
                  activeTab === 1
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm`}
              >
                Login
              </button>
            </nav>
          </div>
          <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md w-full">
            {activeTab === 0 ? (
              // *** SIGNUP FORMU ***
              <div>
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form
                  onSubmit={handleSubmit(onSignupSubmit)}
                  className="space-y-4"
                >
                  <input
                    {...register("name", { required: true, minLength: 3 })}
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                  />
                  {errors.name && (
                    <p className="text-red-500">
                      Name must be at least 3 characters
                    </p>
                  )}

                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                  />
                  {errors.email && (
                    <p className="text-red-500">Invalid email</p>
                  )}

                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    })}
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                  />
                  {errors.password && (
                    <p className="text-red-500">Password must meet criteria</p>
                  )}

                  <input
                    {...register("passwordValidation", {
                      required: true,
                      validate: (value) => value === watch("password"),
                    })}
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-2 border rounded"
                  />
                  {errors.passwordValidation && (
                    <p className="text-red-500">Passwords do not match</p>
                  )}

                  <Controller
                    control={control}
                    name="role_id"
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full p-2 border rounded"
                        onChange={(e) => {
                          field.onChange(e); // React Hook Form güncellemesi
                          setSelectedRole(Number(e.target.value)); // State güncellemesi
                        }}
                      >
                        {roles.map((role) => (
                          <option key={role.id} value={role.id}>
                            {role.name}
                          </option>
                        ))}
                      </select>
                    )}
                  />

                  {selectedRole === 2 && (
                    <>
                      <input
                        {...register("store.name", {
                          required: true,
                          minLength: 3,
                        })}
                        placeholder="Store Name"
                        className="w-full p-2 border rounded"
                      />
                      {errors.store?.name && (
                        <p className="text-red-500">Store name is required</p>
                      )}

                      <input
                        {...register("store.phone", {
                          required: true,
                          pattern: /^\+90[5-9][0-9]{9}$/,
                        })}
                        placeholder="Store Phone"
                        className="w-full p-2 border rounded"
                      />
                      {errors.store?.phone && (
                        <p className="text-red-500">
                          Invalid Turkish phone number
                        </p>
                      )}

                      <input
                        {...register("store.tax_no", {
                          required: true,
                          pattern: /^T\d{4}V\d{6}$/,
                        })}
                        placeholder="Store Tax ID"
                        className="w-full p-2 border rounded"
                      />
                      {errors.store?.tax_no && (
                        <p className="text-red-500">Invalid Tax ID format</p>
                      )}

                      <input
                        {...register("store.bank_account", {
                          required: true,
                          pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
                        })}
                        placeholder="Store Bank Account"
                        className="w-full p-2 border rounded"
                      />
                      {errors.store?.bank_account && (
                        <p className="text-red-500">Invalid IBAN</p>
                      )}
                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Sign Up"}
                  </button>
                </form>
              </div>
            ) : (
              // *** LOGIN FORMU (Eklenen yeni sekme) ***
              <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md w-full">
                <form
                  onSubmit={handleSubmit(onLoginSubmit)}
                  className="space-y-4"
                >
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                  />
                  <div className="flex items-center">
                    <input
                      {...register("remember")}
                      type="checkbox"
                      className="mr-2"
                    />
                    <label>Remember me</label>
                  </div>
                  <button
                    type="submit"
                    className="w-full p-2 bg-green-500 text-white rounded"
                  >
                    Login
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterShop />
    </div>
  );
};

export default SignupLogin;
