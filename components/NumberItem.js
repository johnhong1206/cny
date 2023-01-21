import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToNumberPool } from "../redux/numberpoolSlice";

function NumberItem({ id, number, addNumber, numberarrItem }) {
  const dispatch = useDispatch();
  const addNumbertoPools = () => {
    dispatch(addToNumberPool({ id, number }));
  };
  return (
    <div
      onClick={() => addNumber(number)}
      key={id}
      className="bg-red-600 w-16  h-16 flex items-center justify-center leading-tight rounded-full shadow-lg shadow-white"
    >
      <p>{number}</p>
    </div>
  );
}

export default NumberItem;
