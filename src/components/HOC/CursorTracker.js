import React, { useEffect, useState } from "react";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });
    //mouseMove event
    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        })
      };
      window.addEventListener("mousemove", handleMousePositionChange);
      //clean
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition}/>;
  };
};

export const CursorTracker = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      X: {mousePosition.x} Y: {mousePosition.y}
    </p>
  );
};

export const EnhancedCursorTracker = withMousePosition(CursorTracker)
