import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { useHistory } from "react-router-dom";
import { buttonProps } from "../../models/button-props";

const PrimaryRoutingButton = (buttonProp: buttonProps) => {
  const history = useHistory();

  const routeChange = (path: string) => {
    history.push(path);
  };
  return (
    <PrimaryButton
      className={buttonProp.className}
      onClick={() => {
        routeChange(buttonProp.path);
      }}
    >
      {buttonProp.label}
    </PrimaryButton>
  );
};

export default PrimaryRoutingButton;
