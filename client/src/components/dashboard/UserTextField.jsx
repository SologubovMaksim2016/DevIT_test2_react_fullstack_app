import { TextField } from "@material-ui/core";
import React from "react";

const UserTextField = ({ formik, label, fieldName, type = "text" }) => (
  <>
    {fieldName && label && formik && (
      <TextField
        fullWidth
        id={fieldName}
        name={fieldName}
        type={type}
        label={label}
        value={formik.values[fieldName]}
        onChange={formik.handleChange}
        error={formik.touched[fieldName] && Boolean(formik.errors[fieldName])}
        helperText={formik.touched[fieldName] && formik.errors[fieldName]}
      />
    )}
  </>
);

export default UserTextField;
