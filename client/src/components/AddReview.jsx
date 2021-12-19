import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const AddReview = () => {
	const [name, setName] = useState("");
	const [rating, setRating] = useState("Rating");
	const [reviewText, setReviewText] = useState("");

	const navigate = useNavigate();

	const { id } = useParams();

	const handleSubmitReview = async (e) => {
		e.preventDefault();
		try {
			await RestaurantFinder.post(`/${id}/addReview`, {
				name,
				review: reviewText,
				rating,
			});
			navigate("/");
			navigate("/restaurants/" + id);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<form action="">
				<div className="row mb-3">
					<div className="form-group col">
						<label htmlFor="name">Name</label>
						<input
							id="name"
							placeholder="Name"
							type="text"
							className="form-control"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="form-group col">
						<label htmlFor="rating">Rating</label>
						<select
							value={rating}
							onChange={(e) => setRating(e.target.value)}
							id="rating"
							className="form-select"
						>
							<option disabled>Rating</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="Review">Review</label>
					<textarea
						id="Review"
						className="form-control"
						value={reviewText}
						onChange={(e) => setReviewText(e.target.value)}
					></textarea>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubmitReview}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddReview;
