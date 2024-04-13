import React from "react";

const Card = ({ children }) => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const handleDrag = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
      }}
      onMouseDown={handleDrag}
    >
      {children}
    </div>
  );
};

export default Card;