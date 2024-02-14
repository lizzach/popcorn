import Star from "./Star";
import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px"
}

const starContainerStyle = {
  display: "flex",
}

const textStyle = {
  lineHeight: "1",
  margin: "0"
}

interface StarRatingProps {
  maxRating: number;
}

export default function StarRating({maxRating = 5}: StarRatingProps) {
  const [rating, setRating] = useState<number>(0);

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({length: maxRating}, (_, i) => 
          <Star 
            key={i} 
            onClick={() => setRating(i + 1)}
            full={rating >= i + 1}
            />)}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
}