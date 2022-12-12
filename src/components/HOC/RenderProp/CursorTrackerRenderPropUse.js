import React, { useEffect, useState } from "react";

export const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseChangeHandler = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseChangeHandler);
  }, []);
  return render({ mousePosition });
};

export const CursorTrackerRendered = () => {
  return (
    <div>
      <p>Mouse position:</p>

      <MousePosition
        render={({ mousePosition }) => {
          return (
            <>
              <h3>Render X : {mousePosition.x}</h3>
              <h3>Render Y: {mousePosition.y}</h3>
            </>
          );
        }}
      />
    </div>
  );
};
