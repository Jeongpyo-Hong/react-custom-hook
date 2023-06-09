import { useState } from "react";

const useInput = (initalState) => {
  // state
  const [state, setState] = useState(initalState);

  // handler
  const onChange = (e) => {
    console.log("e.target:", e.target);
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return [state, onChange];
};

export default useInput;
