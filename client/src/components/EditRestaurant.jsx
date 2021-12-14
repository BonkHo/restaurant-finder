import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const EditRestaurant = () => {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("");

	const { id } = useParams();

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await RestaurantFinder.put(`/${id}`, {
				name,
				location,
				price_range: priceRange,
			});
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await RestaurantFinder.get(`/${id}`);
			console.log(response.data);
			setName(response.data.name);
			setLocation(response.data.location);
			setPriceRange(response.data.price_range);
		};
		fetchData();
	}, [id]);

	return (
		<div>
			<form action="">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="form-control"
						id="name"
						type="text"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="location">Location</label>
					<input
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						className="form-control"
						id="location"
						type="text"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price_range">Price Range</label>
					<input
						value={priceRange}
						onChange={(e) => setPriceRange(e.target.value)}
						className="form-control"
						id="price_range"
						type="number"
					/>
				</div>
				<button
					className="btn btn-warning"
					onClick={handleSubmit}
					type="submit"
				>
					Edit
				</button>
			</form>
		</div>
	);
};

export default EditRestaurant;
