import React from "react";
import { MissingMessage, MissingContainer, MissingProducts } from "./styles";
const WarningMessageComponent = ({ message, children }) => {
  return (
    <MissingContainer>
      <MissingProducts>
        <MissingMessage>{message}</MissingMessage>
      </MissingProducts>
      {children && children}
    </MissingContainer>
  );
};
export default WarningMessageComponent;
