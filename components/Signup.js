import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Signup = () => {
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
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field className="border p-2 m-2" placeholder="Username" type="text" name="username" />
            <ErrorMessage className="font-semibold text-red-500 m-2 p-2" name="username" component="div" />
            <Field className="border p-2 m-2" placeholder="Password" type="password" name="password" />
            <ErrorMessage className="font-semibold text-red-500 m-2 p-2" name="password" component="div" />
            <button className="p-2 m-2 bg-blue-500 text-white" type="submit" disabled={isSubmitting}>
              Signup
            </button>
          </Form>
        )}
      </Formik>
    </div>
    )
}

export default Signup
