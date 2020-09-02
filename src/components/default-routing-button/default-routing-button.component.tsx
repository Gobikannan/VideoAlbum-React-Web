import React from "react";
import { DefaultButton } from "office-ui-fabric-react";
import { useHistory } from "react-router-dom";
import { buttonProps } from "../../models/button-props";

const DefaultRoutingButton = (buttonProp: buttonProps) => {
  const history = useHistory();

  const routeChange = (path: string) => {
    history.push(path);
  };
  return (
    <DefaultButton
      className={buttonProp.className}
      onClick={() => {
        routeChange(buttonProp.path);
      }}
    >
      {buttonProp.label}
    </DefaultButton>
  );
};

export default DefaultRoutingButton;
