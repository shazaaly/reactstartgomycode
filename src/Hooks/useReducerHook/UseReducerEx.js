import React from "react";
import { useReducer } from "react";

export const UseReducerEx = () => {
  const initialState = {
    money: 100,
  };
  const reducer = (state, action) => {
    if (action.type === "BUY") {
      return { money: state.money - 10 };
    }
    if (action.type === "SELL") {
      return { money: state.money + 50 };
    }
    if (action.type === "SAVE") {
      return { money: state.money + 30 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={ {textAlign : 'center', background:'green', color:'white'}}>
      <h2 style={{ paddong: "5px", margin: "5px" }}>Wallet : {state.money}</h2>
      <div>
        <button
          style={{ padding: " 10px", margin: "5px" }}
          onClick={() => dispatch({ type: "BUY" })}
        >
          BUY
        </button>
        <button
          style={{ padding: " 10px", margin: "5px" }}
          onClick={() => dispatch({ type: "SELL" })}
        >
          SELL
        </button>
        <button
          style={{ padding: " 10px", margin: "5px" }}
          onClick={() => dispatch({ type: "SELL" })}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};
