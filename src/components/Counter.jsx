import React from "react";
import Button from "./Button";

const Counter = ({ type, setCount, count }) => {
  const incrementHandler = () => {
    console.log("Incrementing", type);
    setCount((prevCount) => prevCount + 1);
  };

  const decrementHandler = () => {
    console.log("Decrementing", type);
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex items-center">
      <Button onClick={decrementHandler}>-</Button>
      <p className="text-base font-bold">{count}</p>
      <Button onClick={incrementHandler}>+</Button>
    </div>
  );
};

export default Counter;
