import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().email("Please enter a vaild email").required("Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export const signUpSchema = yup.object().shape({
  email: yup.string().email("Please enter a vaild email").required("Required"),
  name: yup
    .string()
    .min(6, "must be at least 6 characters")
    .required("Required"),
  address: yup
    .string()
    .min(6, "must be at least 6 characters")
    .required("required"),
  password: yup
    .string()
    .min(6, "passwords must be at least of length 6")
    .required("Required"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], "password dosn't match").required("Required"),
  agreeToTerms : yup.boolean().oneOf([true],'You must agree to the terms and conditions')
});

export const editSchema = yup.object().shape({
  email: yup.string().email("Please enter a vaild email").required("Required"),
  name: yup
  .string()
  .min(6, "must be at least 6 characters")
  .required("Required"),
  address: yup
    .string()
    .min(6, "must be at least 6 characters")
    .required("required"),
})