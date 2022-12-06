import React, { useState } from "react";

export const AllGoals = (props) => {
  //props.goalsList
  let goals = props.list;

  return (
    <div>
      {goals && goals.length > 0 && <h3>Goals</h3>}

      <ul>
        {goals ? (
          goals.map((goal, index) => {
            return (
              <li key={index}>
                <div>
                  <h4>
                    {goal.goalName} to be done {goal.time}
                  </h4>
                </div>
              </li>
            );
          })
        ) : (
          <div>No Goals Added</div>
        )}
      </ul>
    </div>
  );
};
