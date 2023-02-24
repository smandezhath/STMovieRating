import { useState } from "react";
import "./Rating.css";

const Rating = () => {
  const [ratingValue, setratingValue] = useState("0");

  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="5"
        value="0"
        onInput={(e) => {
          setratingValue(e.target.value);
        }}
      />
      <p id="rangeValue">{ratingValue}</p>
    </div>
  );
};

export default Rating;
