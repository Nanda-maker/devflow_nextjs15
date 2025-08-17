"use client";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN" // Assuming AuthForm can accept a prop to differentiate between sign-in and sign-up
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })} // Mock submit handler
    />
  );
};

export default SignIn;
