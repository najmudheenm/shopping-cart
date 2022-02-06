import { Component } from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";

//import pages
import ShopPage from "./pages/shop/shop.components";
import SignInAndSignUpPage from "./pages/sign-in-signup/sign-in-and-sign-up";
import HomePage from "./pages/homepage/Homepage.components";

//import components
import Header from "./components/header/header.component";

//firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
       
        this.setState({
          currentUser: {
            id:userRef.id,
            ...userRef.data(),
          },
        });
      } else {
        this.setState({ currentUser: "" });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
          <Route path="*" element={<h1>nothing to fetch data</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;
