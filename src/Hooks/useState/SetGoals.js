import React, { useState } from "react";
import { AllGoals } from "./AllGoals";

export const SetGoals = () => {
  const [goalsList, setGoalsList] = useState([]);
  const [formData, setFormData] = useState({
    goalName: "",
    time: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setGoalsList([...goalsList, formData]);
  };

  return (
    <div>
      <h2>My Goals</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="name"
          name="goalName"
          value={formData.goalName}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="By.."
          name="time"
          value={formData.time}
          onChange={changeHandler}
        />

        <button type="submit">Submit</button>
      </form>

      <AllGoals list={goalsList} />
      
    </div>
  );
};
