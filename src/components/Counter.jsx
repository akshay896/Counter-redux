import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counterReducer);
  const handleInputValue = () => {
    if (amount) {
      dispatch(incrementByAmount(Number(amount)));
    } else {
      alert("Please enter amount to proceed!!!");
    }
  };
  return (
    <div>
      <h1 className="text-center">Counter App</h1>
      <div className="border p-5 rounded mt-5">
        <h1 style={{ fontSize: "80px" }} className="text-center text-warning">
          {count}
        </h1>
        <div className="d-flex justify-content-between mt-3 w-100">
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-warning"
          >
            DECREMENT
          </button>
          <button onClick={() => dispatch(reset())} className="btn btn-danger">
            RESET
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-success"
          >
            INCREMENT
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5 w-100">
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="form-control "
            placeholder="Increment Counter Amount"
            type="text"
          />
          <button onClick={handleInputValue} className="btn btn-primary ms-2">
            ICREMENT BY AMOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
