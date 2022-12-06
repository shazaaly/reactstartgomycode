import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(false)

export const ThemeProvider = ({ children }) => {

    const  [theme, setTheme]  =  useState('light');

    const toggleFunction =  ()  =>  {
        setTheme(theme === 'light'? 'dark' : 'light' )
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleFunction }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const UseTheme = () => useContext(ThemeContext);
