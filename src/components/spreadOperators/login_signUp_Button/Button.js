import React from "react";
/* ...btnProps : means native button props */

export const Button = ({ children, type, ...btnProps }) => {
  const className = type === "login" ? "login" : "signUp";
  return (
    <button className={`${className}`} {...btnProps}>
      {children}
    </button>
  );
};

export const LoginButton = ({ type, children, ...btnProps }) => {
  console.log(btnProps.title);
  return (
    <Button type="login" title={btnProps.title}>
      Login
    </Button>
  );
};
