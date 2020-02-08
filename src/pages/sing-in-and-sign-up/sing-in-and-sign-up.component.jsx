import React from "react";
import "./sing-in-and-sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from '../../components/sign-up/sign-up.component';
import './sing-in-and-sign-up.styles.scss';


const SignInAndSignUpPage = () => (
  <div className="sing-in-and-sign-up">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignInAndSignUpPage;
