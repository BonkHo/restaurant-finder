import React from "react";
import StarRating from "./StarRating";

const Reviews = () => {
	return (
		<div className="row rows-cols-3">
			<div
				className="card text-white bg-primary m-3"
				style={{ maxWidth: "30%" }}
			>
				<div className="card-header d-flex justify-content-between">
					<span>James</span>
					<span>
						<StarRating rating={5} />
					</span>
				</div>
				<div className="card-body">
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>

			<div
				className="card text-white bg-primary m-3"
				style={{ maxWidth: "30%" }}
			>
				<div className="card-header d-flex justify-content-between">
					<span>James</span>
					<span>
						<StarRating rating={5} />
					</span>
				</div>
				<div className="card-body">
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>

			<div
				className="card text-white bg-primary m-3"
				style={{ maxWidth: "30%" }}
			>
				<div className="card-header d-flex justify-content-between">
					<span>James</span>
					<span>
						<StarRating rating={5} />
					</span>
				</div>
				<div className="card-body">
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>
			<div
				className="card text-white bg-primary m-3"
				style={{ maxWidth: "30%" }}
			>
				<div className="card-header d-flex justify-content-between">
					<span>James</span>
					<span>
						<StarRating rating={5} />
					</span>
				</div>
				<div className="card-body">
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
