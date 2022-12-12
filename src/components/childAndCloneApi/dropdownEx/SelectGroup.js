import React, { Children, cloneElement } from "react";

export const SelectGroup = ({ onChange, selected, children }) => {
  const options = Children.map(children, (child) => {
    return cloneElement(child, {
      onChange,
      selected: child.props.value === selected,
    });
  });
  
  return <div>{options}</div>;
};

export const SelectOption = ({ children, value }) => {
  return (
    <div>
      <option value={value}>{children}</option>
    </div>
  );
};
