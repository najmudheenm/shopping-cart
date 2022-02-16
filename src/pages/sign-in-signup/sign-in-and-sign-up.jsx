import "./sign-in-and-sign-up.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//components
import SignIn from "../../components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import SignUp from "../../components/sign-up/sign-up.components";

const SignInAndSignUpPage = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  if (currentUser) {
    navigate("/");
  }
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
