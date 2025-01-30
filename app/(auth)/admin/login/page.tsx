"use client";

import Button from "@/components/buttons";
import React from "react";
import { showToast } from "@/lib/util";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostAdmin } from "@/lib/hooks/api/mutations";
import { LoginInputs } from "@/lib/types";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const postCustomer = usePostAdmin();
  const initialFormData: LoginInputs = {
    emailAddress: "",
    password: "",
  };
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialFormData,
  });

  const onSubmit = async (data: LoginInputs) => {
    console.log(data);
    postCustomer.mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        showToast.success("User registered successfully");
        router.push("/dashboard");
        reset(initialFormData);
      },
      onError: (error: Error) => {
        console.log(error);
        showToast.error(error.message);
      },
    });
  };

  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="">
          {/* Form Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Sign In
            </h2>
            <p>Glad to see you again</p>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-black font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("emailAddress")}
                  placeholder="Enter email address"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {errors.emailAddress && (
                  <span className="text-red-600">
                    {errors.emailAddress.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-black font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Enter password"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <Button
                variant="primary"
                type="submit"
                className="w-full text-white"
                isLoading={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
