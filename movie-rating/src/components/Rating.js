import { useState } from "react";
import "./Rating.css";

const Rating = () => {
  const [ratingValue, setratingValue] = useState("0");

  return (
    <div>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </div>
  );
};

export default Rating;
