import React from "react";

const StarRating = ({ rating }) => {
	// Will use to display how many stars for rating
	const stars = [];

	// Adds stars into stars array based on if the iteration is less than the rating
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(<i key={i} className="fa-solid fa-star text-warning" />);
		} else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
			stars.push(
				<i key={i} className="fa-solid fa-star-half-alt text-warning" />
			);
		} else {
			stars.push(<i key={i} className="fa-regular fa-star" />);
		}
	}
	return <>{stars}</>;
};

export default StarRating;
