import "./sign-in-and-sign-up.scss";

//components
import SignIn from "../../components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import SignUp from "../../components/sign-up/sign-up.components";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
