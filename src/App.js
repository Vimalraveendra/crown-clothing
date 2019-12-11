import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/signin-and-signup/SignIn-and-SignUp";
import CheckOutPage from "./pages/checkout/CheckOut";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { auth, createUserProfileDocument } from "./firebase/Firebase.Utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null
  //   };
  // }
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      // console.log("app", user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  //user:{currentUser:null}
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
