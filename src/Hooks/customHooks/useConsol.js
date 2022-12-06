import React, { useEffect } from "react";

export const useConsol = (value) => {
  useEffect(() => {
    console.log(value);
  }, [value]);

  return <div>


  </div>;
};
