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

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
}

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = ""
  }: StarRatingProps) {
  const [rating, setRating] = useState<number>(0);
  const [tempRating, setTempRating] = useState<number>(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({length: maxRating}, (_, i) => 
          <Star 
            key={i} 
            onClick={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
            />)}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}