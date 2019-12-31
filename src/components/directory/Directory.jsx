import React from "react";
// import "./Directory.scss";
import { MenuDirectoryContainer } from "./Directory.styles";
import MenuItem from "../menu-item/Menu-Item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => (
  <MenuDirectoryContainer>
    {sections.map(({ title, imageUrl, id, linkUrl, size }) => {
      return (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
          size={size}
        />
      );
    })}
  </MenuDirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
