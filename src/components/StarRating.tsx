import Star from "./Star";

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

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({length: maxRating}, (_, i) => <Star key={i} />)}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}