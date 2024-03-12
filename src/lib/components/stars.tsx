import { FC } from "react";

interface StarsRatingProps {
  filledStars: number;
}

const StarsRating: FC<StarsRatingProps> = ({ filledStars }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <ul className="mt-stars">
      {stars.map((star, index) => (
        <li key={star}>
          <i
            className={index + 1 <= filledStars ? "fa fa-star" : "fa fa-star-o"}
          ></i>
        </li>
      ))}
    </ul>
  );
};

export default StarsRating;
