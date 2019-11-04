import React from "react";
import "./SignIn-and-SignUp.scss";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";

const SignInAndSignUpPage = () => {
  return (
    <div className="signin-and-signup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
