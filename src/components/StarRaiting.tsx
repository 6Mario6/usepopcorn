import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
};
const textStyle = {
  lineHeight: "1",
  margin: "0",
};
export const StartRating = ({ maxRating = 5 }: { maxRating?: number }) => {
  const [rating, setRating] = useState(0);
  const handleRating = (rating: number) => {
    setRating(rating);
  };
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star onRate={() => handleRating(i + 1)} key={i} />
        ))}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
};

const StarStyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor: "pointer",
};

const Star = ({ onRate }: { onRate: () => void }) => {
  return (
    <div onClick={onRate} style={StarStyle}>
      ⭐
    </div>
  );
};
