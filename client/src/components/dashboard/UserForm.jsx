import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@material-ui/core";
import React from "react";
import UserTextField from './UserTextField'
import {useDispatch} from 'react-redux'
import {registration} from '../../store/asyncActions/registration'
import {addUserAC} from '../../store/usersReduser'

const validationSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[a-z,A-Z]+$/, "Must be alphabets only")
    .min(2, "First name should be of minimum 2 characters length")
    .required("First name is required"),
  lastName: yup
    .string()
    .matches(/^[a-z,A-Z]+$/, "Must be alphabets only")
    .required("Last name is required")
    .required("First name is required"),
  // email: yup
  //   .string()
  //   .matches(/^[a-z,A-Z]+$/, "Must be alphabets only")
  //   .min(2, "First name should be of minimum 2 characters length")
  //   .required("First name is required"),
  // password: yup
  //   .string()
  //   .matches(/^[a-z,A-Z]+$/, "Must be alphabets only")
  //   .required("Last name is required")
  //   .required("First name is required"),
});

const UserForm = ({ toggleUserModal }) => {
  const dispatch = useDispatch()
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(registration(values, addUserAC))
      toggleUserModal(false)
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <UserTextField fieldName="firstName" label="First Name" formik={formik} />
      <UserTextField fieldName="lastName" label="Last Name" formik={formik} />
      <UserTextField fieldName="email" label="Email" formik={formik} />
      <UserTextField fieldName="password" type="password" label="Password" formik={formik} />
      <br />
      <br />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

export { UserForm };
