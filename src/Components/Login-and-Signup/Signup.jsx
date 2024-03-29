import React, { memo, useRef } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpFunction } from "../../Redux/Slices/AuthSlice";

const Signup = () => {
  console.log("rendering signup");
  let dispatch = useDispatch();
  let emailRef = useRef();
  let passwordRef = useRef();
  let nameRef = useRef();
  return (
    <div className="mx-auto w-fit">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <input
              ref={nameRef}
              size="lg"
              placeholder="Enter Your Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <input
              ref={emailRef}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <input
              ref={passwordRef}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            className="mt-6"
            fullWidth
            onClick={() =>
              dispatch(
                signUpFunction({
                  action: "SIGNUP",
                  email: emailRef.current.value,
                  pass: passwordRef.current.value,
                  name: nameRef.current.value,
                })
              )
            }
          >
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/Login" className="font-medium text-gray-900">
              Log In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default memo(Signup);
