import React from "react";
import "./View.css";
import { incNumber } from "./actionstore/actions";
import { decNumber } from "./actionstore/actions";

import { useSelector, useDispatch } from "react-redux";

const View = () => {
  // it alternative to the useContext hooks in react / consumer from context API
  // inside the state contain  all application state as an object;
  const mystate = useSelector((state) => state.ChangeTheNumber);

  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <h1 className="header">Welcome to Redux</h1>
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <button
              className="quantity__minus"
              onClick={() => dispatch(decNumber())}
            >
              -
            </button>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={mystate}
            />

            <button
              className="quantity__plus"
              onClick={() => dispatch(incNumber())}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
