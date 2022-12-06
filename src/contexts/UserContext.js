import { createContext, useContext, useState } from "react";
//  undefined since the app doesn't know beforehand who the logged in user will be.
const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "Shaza",
    email: "test@gmail.com",
    hackerspace: "GreekCampus",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);
