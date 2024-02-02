import React from "react";
import StarRatings from "react-star-ratings";
import { useWatch } from "react-hook-form";

export default function RatingStar({ rating, size }) {
  const starColor = useWatch({
    name: "starColor",
  });
  const DisabledStar = useWatch({
    name: "DisabledStar",
  });
  return (
    <StarRatings
      rating={rating}
      starRatedColor={starColor || "orange"}
      starHoverColor={starColor || "orange"}
      starEmptyColor={DisabledStar || "#d9d9d9"}
      starDimension={size || "20px"}
      starSpacing="2px"
    />
  );
}

export function SingRatingStar({ starColor, size }) {
  return (
    <StarRatings
      rating={1}
      starRatedColor={starColor || "orange"}
      starHoverColor={starColor || "orange"}
      starEmptyColor="gray"
      starDimension={size || "20px"}
      starSpacing="2px"
      numberOfStars={1}
    />
  );
}

