import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles, signupUser } from "../store/actions/authActions";
import HeaderShop from "../layout/HeaderShop";
import FooterShop from "../layout/FooterShop";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.auth.roles);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const signupSuccess = useSelector((state) => state.auth.signupSuccess); // Signup başarılı olup olmadığını takip et

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const [selectedRole, setSelectedRole] = useState(3);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const history = useHistory();

  useEffect(() => {
    if (signupSuccess) {
      history.push("/shop"); // Başarıyla kayıt olunca yönlendir
    }
  }, [signupSuccess, history]);

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  return (
    <div>
      <HeaderShop isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        className={`flex flex-col my-10 transition-all duration-300 items-center gap-10 ${
          isMenuOpen ? "mt-130 md:mt-0" : "mt-0"
        }`}
      >
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name", { required: true, minLength: 3 })}
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-500">Name must be at least 3 characters</p>
            )}

            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500">Invalid email</p>}

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
                  onChange={(e) => setSelectedRole(Number(e.target.value))}
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
                  {...register("store.name", { required: true, minLength: 3 })}
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
                  <p className="text-red-500">Invalid Turkish phone number</p>
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
      </div>
      <FooterShop />
    </div>
  );
};

export default Signup;
