import React, { Children, cloneElement } from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
  const options = Children.map(children,(child) => {
    return cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });

  return <div>{options}</div>;
};

export const RadioOption = ({ value, onChange, checked, children }) => {
  return (
    <div className="RadioOption">
      <input id={value} type="radio" name={value} value={value} checked={checked} onChange={(e)=>onChange(e.target.value)}/>
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
