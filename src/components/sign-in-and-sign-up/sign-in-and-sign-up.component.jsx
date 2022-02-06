import "./sign-in-and-sign-up.styles.scss";

import React, { Component } from "react";

//components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.util";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };
  changeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            onChange={this.changeHandler}
            type="email"
            value={this.state.email}
            required
            id="email"
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            id="password"
            value={this.state.password}
            required
            label="Password"
            onChange={this.changeHandler}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton className="google-sign-in" onClick={signInWithGoogle}>
              sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
