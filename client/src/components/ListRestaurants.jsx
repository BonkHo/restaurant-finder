import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const ListRestaurants = (props) => {
	// State for list of restaurants
	const { restaurants, setRestaurants } = useContext(RestaurantsContext);

	// Represents history of browser
	let navigate = useNavigate();

	// Deletes a restaurant from the list
	const handleDelete = async (id) => {
		try {
			await RestaurantFinder.delete(`/${id}`);
			setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
		} catch (err) {
			console.log(err);
		}
	};

	// Edit a restuarant from the list
	const handleEdit = (id) => {
		navigate(`/restaurants/${id}/edit`);
	};
	// Collects restaurants from the API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await RestaurantFinder.get("/");
				console.log(res.data);
				setRestaurants(res.data);
			} catch (err) {}
		};
		fetchData();
	}, [setRestaurants]);

	return (
		<div className="list-group">
			<table className="table table-hover">
				<thead>
					<tr className="table-primary">
						<th scope="col">Restaurant</th>
						<th scope="col">Location</th>
						<th scope="col">Price Range</th>
						<th scope="col">Ratings</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody className="table-dark">
					{restaurants &&
						restaurants.map((restaurant) => {
							return (
								<tr key={restaurant.id}>
									<td>{restaurant.name}</td>
									<td>{restaurant.location}</td>
									<td>{"$".repeat(restaurant.price_range)}</td>
									<td>"Review"</td>
									<td>
										<button
											className="btn btn-warning"
											onClick={() => {
												handleEdit(restaurant.id);
											}}
										>
											Edit
										</button>
									</td>
									<td>
										<button
											className="btn btn-danger"
											onClick={() => handleDelete(restaurant.id)}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default ListRestaurants;
