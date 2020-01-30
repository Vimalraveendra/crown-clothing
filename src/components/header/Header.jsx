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
import { auth } from "../../firebase/Firebase.Utils";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <OptionLink to="div" onClick={() => auth.signOut()}>
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
export default connect(mapStateToProps)(Header);
