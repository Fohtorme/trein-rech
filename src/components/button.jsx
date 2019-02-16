import React from "react";

const Button = props => {
  const { onClick, children, style } = props;
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
