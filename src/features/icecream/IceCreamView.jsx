import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../icecream/icecreamSlice";

export const IceCreamView = () => {
  const numIceCreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCream - {numIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(2))}>Restock IceCream</button>
    </div>
  );
};
