import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Field name="username" type="text" placeholder="Username" />
      <ErrorMessage name="username" component="div" className="error" />
      <Field name="email" type="email" placeholder="Email" />
      <ErrorMessage name="email" component="div" className="error" />
      <Field name="password" type="password" placeholder="Password" />
      <ErrorMessage name="password" component="div" className="error" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default FormikForm;
