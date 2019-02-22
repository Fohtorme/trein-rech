import React, { Component } from "react";
import Button from "./button";

const ButtonGroup = props => {
  const { buttons, selectedButton } = props;
  return (
    <div>
      {buttons.map(button => (
        <Button
          key={button.id}
          onClick={button.onClick}
          style={
            button.id === selectedButton ? { backgroundColor: "blue" } : {}
          }
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
