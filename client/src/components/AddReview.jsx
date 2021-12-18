import React, { useState } from "react";

const AddReview = () => {
	const [name, setName] = useState("");
	const [rating, setRating] = useState("Rating");
	const [review, setReview] = useState("");

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
						value={review}
						onChange={(e) => setReview(e.target.value)}
					></textarea>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default AddReview;
