/* eslint-disable react/prop-types */
import { useState } from "react";

export const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    window.open(props.url, "_blank");
    setCounter(counter + 1);
  };
  return (
    <button className={`button button-${props.network}`} onClick={handleClick}>
      {props.children} {counter}
    </button>
  );
};
