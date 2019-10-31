import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/signin-and-signup/SignIn-and-SignUp";
import { auth } from "./firebase/Firebase.Utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log("app", user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
