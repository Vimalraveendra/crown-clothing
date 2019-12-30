import React from "react";
// import "./Homepage.scss";
import { HomePageContainer } from "./HomePage.styles";
import Directory from "../../components/directory/Directory";
const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
