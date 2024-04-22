import React from "react";
import Button from "../Button/Button";

const GuessCount = ({ type, setCount, count }) => {
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
    <div className="flex mt-3">
      <Button
        className="border border-gray4 flex items-center rounded-[0.2rem] px-1"
        onClick={decrementHandler}
      >
        -
      </Button>
      <p className="text-center appearance-none m-0 w-14">{count}</p>
      <Button
        className="border border-gray4 flex items-center rounded-[0.2rem] px-1"
        onClick={incrementHandler}
      >
        +
      </Button>
    </div>
  );
};

export default GuessCount;
