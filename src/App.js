import { Component ,} from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";

//import pages
import ShopPage from "./pages/shop/shop.components";
import SignInAndSignUpPage from "./pages/sign-in-signup/sign-in-and-sign-up";
import HomePage from "./pages/homepage/Homepage.components";
import Collection from "./pages/collection/collection.component"

//import components
import Header from "./components/header/header.component";

//firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

//redux state
import { connect } from "react-redux";
import {setCurrentUser}from './redux/user/user.actions'
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends Component {

  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser,currentUser} = this.props;
    console.log(process.env.REACT_APP_API_KEY);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        setCurrentUser({
          id:userRef.id,
          ...userRef.data(),
        });
      } else {
        setCurrentUser("");
        
      }
      
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    
    return (
      <div className="App">
        <Header  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collection/:id" element={<Collection />} />
          <Route path="/signin" element={ <SignInAndSignUpPage currentUser={this.currentUser} /> } />
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="*" element={<h1>nothing to fetch data</h1>} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps) (App);
