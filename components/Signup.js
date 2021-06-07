import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useRouter } from "next/router";

const Signup = () => {

  const Router = useRouter();

  const handleSignup = async ({ username, password }) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://parseapi.back4app.com/users",
        headers: {
          "X-Parse-Application-Id": "1aKNPKlZZkL3gKe1avjN4bJzq1pkgAw7vj2aLRO3",
          "X-Parse-REST-API-Key": "ibV2rrC1p90TfLxwUumNkKAzI7Rgk49bCj4ODnLV",
        },
        data: {
          username,
          password,
        },
      });
      console.log(response)
      localStorage.setItem('sessionToken', response.data.sessionToken);
      Router.replace("/");
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <div className="border border-black p-2 m-2">
      <div className="font-bold text-2xl m-2">Signup</div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Username Required";
          }
          if (!values.password) {
            errors.password = "Password Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSignup(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              className="border p-2 m-2"
              placeholder="Username"
              type="text"
              name="username"
            />
            <ErrorMessage
              className="font-semibold text-red-500 m-2 p-2"
              name="username"
              component="div"
            />
            <Field
              className="border p-2 m-2"
              placeholder="Password"
              type="password"
              name="password"
            />
            <ErrorMessage
              className="font-semibold text-red-500 m-2 p-2"
              name="password"
              component="div"
            />
            <button
              className="p-2 m-2 bg-blue-500 text-white"
              type="submit"
              disabled={isSubmitting}
            >
              Signup
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
