import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Ellipse1 from "../assets/imgs/Ellipse 1.png";
import Ellipse2 from "../assets/imgs/Ellipse 2.png";
import Polygon1 from "../assets/imgs/Polygon 1.png";
import Rectangle1 from "../assets/imgs/Rectangle 1.png";
import Frame from "../assets/imgs/Frame 14.png";
import { useDispatch, useSelector } from "react-redux";
import { resetReg, signup } from "../store/features/AuthSlice";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import { useFormik } from "formik";
import { signUpSchema } from "../utils/Validations";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, registered, isAuthed } = useSelector((state) => state.auth);

  const onSubmit = () => {
    dispatch(
      signup({
        name: values.name,
        email: values.email,
        address: values.address,
        password: values.password,
      })
    );
  };

  const { values, handleChange, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
        address: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      },
      onSubmit,
      validationSchema: signUpSchema,
    });

  useEffect(() => {
    if (isAuthed) {
      navigate("/");
    }
  }, [isAuthed]);

  useEffect(() => {
    if (registered) {
      setTimeout(() => {
        navigate("/signin");
        dispatch(resetReg());
      }, 3000);
    }
  }, [registered]);
  console.log(errors);
  return (
    <div className="w-[100vw] h-screen relative flex flex-col items-center bg-white dark:bg-zinc-950 transition-colors ease-in-out duration-500 dark:text-white justify-center">
      <div className="lg:w-[100%] w-[100%] h-[100%]  flex">
        <div className="lg:w-[40%] slide-in-inv w-[100%] flex flex-col items-center justify-center">
          <div className="lg:w-[65%] flex flex-col gap-7 p-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Sign Up</h1>
              <p className="text-xs text-zinc-500">
                Thanks for choosing Trendwave.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col">
              <Input
                id={"email"}
                value={values.email}
                handler={handleChange}
                handleBlur={handleBlur}
                text={"Email"}
                error={errors.email && touched.email ? errors.email : false}
                type={"text"}
                placeholder={"CurvaSudLaPrima@TW.com"}
              />
              <Input
                id={"name"}
                text={"Full Name"}
                type={"text"}
                value={values.name}
                handler={handleChange}
                handleBlur={handleBlur}
                error={errors.name && touched.name ? errors.name : false}
                placeholder={"ex: Mahmoud Abdelraziq"}
              />
              <Input
                id={"address"}
                text={"Address"}
                type={"text"}
                value={values.address}
                handler={handleChange}
                handleBlur={handleBlur}
                error={
                  errors.address && touched.address ? errors.address : false
                }
                placeholder={"21 Savage .st , Mars"}
              />
              <Input
                id={"password"}
                text={"Password"}
                type={"password"}
                value={values.password}
                handler={handleChange}
                error={
                  errors.password && touched.password ? errors.password : false
                }
                placeholder={"••••••••••••"}
              />
              <Input
                id={"confirmPassword"}
                value={values.confirmPassword}
                handleBlur={handleBlur}
                handler={handleChange}
                text={"Re-Enter Password"}
                type={"password"}
                error={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : false
                }
                placeholder={"••••••••••••"}
              />
              <div className=" w-full mt-5">
                <div className="flex text-xs gap-2">
                  <input
                    value={values.agreeToTerms}
                    onClick={handleChange}
                    onBlur={handleBlur}
                    id="agreeToTerms"
                    type="checkbox"
                    name="agreeToTerms"
                  />
                  <span>agree with the terms</span>
                </div>
                <span className="text-red-400 text-xs">
                  {errors.agreeToTerms && touched.agreeToTerms
                    ? errors.agreeToTerms
                    : ""}
                </span>
                <p className="text-xs text-zinc-600 mt-2">
                  By clicking the checkbox, you agree to the terms & conditions
                  and privacy policy, both of which are listed
                  <a
                    href="https://www.youtube.com/shorts/Bb93rWg1XS4"
                    className="text-cyan-400"
                  >
                    {" "}
                    here
                  </a>
                  .
                </p>
              </div>
              <div className="w-full mt-4">
                <Button
                  disabled={loading}
                  type={"submit"}
                  text={"Register"}
                  w={"full"}
                />
              </div>
            </form>
            <Link className="text-xs text-center" to={"/"}>
              Go Back
            </Link>
          </div>
        </div>
        <div className="lg:w-[60%] overflow-hidden relative justify-center items-center hidden lg:flex bg-[#F6F8FA] dark:bg-zinc-900">
          <h1 className="w-[50%] text-3xl z-40 font-semibold">
            Get started with TrendWave now and enjoy the real e-commerce
            experience
          </h1>
          <img
            className="absolute slide-in-inv delay-100 top-0 left-0 w-[15%]"
            src={Ellipse1}
          />
          <img
            className="absolute popup delay-100 bottom-7 left-20 w-[20%] "
            src={Ellipse2}
          />
          <img
            className="absolute popup delay-100 bottom-0 right-0 w-[40%]"
            src={Rectangle1}
          />
          <img
            className="absolute popup dark:hidden delay-100 w-[20%] bottom-[50%] right-[50%] "
            src={Frame}
          />
          <img
            className="absolute slide-in delay-100 right-0 top-4 "
            src={Polygon1}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
