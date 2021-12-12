import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
	// Provides RestuarantsContext to component
	const { addRestaurants } = useContext(RestaurantsContext);

	// States for the form
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("Price Range");

	// Function to handle the form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await RestaurantFinder.post("/", {
				name: name,
				location: location,
				price_range: priceRange,
			});
			addRestaurants(response.data.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="mb-4">
			<form className="d-flex justify-content-center">
				<div className="row">
					<div className="col">
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="form-control"
							type="text"
							placeholder="Name"
						/>
					</div>
					<div className="col">
						<input
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							className="form-control"
							type="text"
							placeholder="Location"
						/>
					</div>
					<div className="col">
						<select
							value={priceRange}
							onChange={(e) => setPriceRange(e.target.value)}
							className="form-select"
						>
							<option disabled>Price Range</option>
							<option value="1">$</option>
							<option value="2">$$</option>
							<option value="3">$$$</option>
							<option value="4">$$$$</option>
						</select>
					</div>
					<button
						className="btn btn-primary col"
						onClick={handleSubmit}
						type="submit"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddRestaurant;
