import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import "./Header.scss";
import CartIcon from "../cart-icon/Cart-Icon";
import CartDropDown from "../cart-dropdown/Cart-DropDown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ReactComponent as Logo } from "../../assests/crown.svg";
// import { auth } from "../../firebase/Firebase.Utils";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" to="/" onClick={signOutStart}>
            {" "}
            Sign Out
          </OptionLink>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};
const mapStateToProps = state =>
  createStructuredSelector({
    // currentUser: state.user.currentUser
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
