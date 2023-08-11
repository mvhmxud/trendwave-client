import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Ellipse1 from "../assets/imgs/Ellipse 1.png";
import Ellipse2 from "../assets/imgs/Ellipse 2.png";
import Polygon1 from "../assets/imgs/Polygon 1.png";
import Rectangle1 from "../assets/imgs/Rectangle 1.png";
import Frame from "../assets/imgs/Frame 14.png";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../store/features/AuthSlice";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import { useFormik } from "formik";
import { signInSchema } from "../utils/Validations";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthed } = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    dispatch(signIn(values));
  };

  const { values, handleChange, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        rememberMe: false,
      },
      onSubmit,
      validationSchema: signInSchema,
    });
  useEffect(() => {
    if (isAuthed) {
      navigate("/");
    }
  }, [isAuthed]);
  return (
    <div className="w-[100vw] h-screen relative flex flex-col items-center bg-white dark:bg-zinc-950 transition-colors ease-in-out duration-500 dark:text-white justify-center">
      <div className="lg:w-[100%] w-[100%] h-[100%]  flex">
        <div className="lg:w-[40%] slide-in-inv w-[100%] flex flex-col items-center justify-center">
          <div className="lg:w-[65%] flex flex-col gap-7 p-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Log in</h1>
              <p className="text-xs text-zinc-500">
                Thanks to come back on TrendWave
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col ">
              <Input
                id={"email"}
                text={"Email"}
                type={'text'}
                placeholder={"curvaSudLaPrima@tw.com"}
                handler={handleChange}
                handleBlur={handleBlur}
                error={errors.email && touched.email ? errors.email : false}
                value={values.email}
              />
              <Input
                id={"password"}
                text={"Password"}
                placeholder={"••••••••••••"}
                type={"password"}
                handleBlur={handleBlur}
                handler={handleChange}
                error={errors.password && touched.password ? errors.password : false}
                value={values.password}
              />
              <div className="flex w-full items-center justify-between mt-5">
                <div className="flex w-[50%] gap-2 text-xs">
                  <input
                    value={values.rememberMe}
                    onChange={handleChange}
                    type="checkbox"
                    name=""
                    id="rememberMe"
                  />
                  <label htmlFor="rememberme" className="capitalize">
                    remember me
                  </label>
                </div>
                <div>
                  <Link className="text-xs text-cyan-500 font-medium">
                    Forget Password
                  </Link>
                </div>
              </div>
              <div className="w-full mt-4">
                <Button disabled={loading} type={"submit"} text={"Login"} w={"full"} />
              </div>
            </form>
            <Link className="text-xs text-center" to={"/"}>
              Back to Home
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

export default SignIn;
