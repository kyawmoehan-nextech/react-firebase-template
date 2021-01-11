import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import Page from "src/components/Page/Page";

import "./Login.css";

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
});

const Login = () => {
  return (
    <Page title="Login">
      <h1>Login Form</h1>
    </Page>
  );
};

export default Login;
