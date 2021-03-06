import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import StarRating from "./StarRating";

const ListRestaurants = (props) => {
	// State for list of restaurants
	const { restaurants, setRestaurants } = useContext(RestaurantsContext);

	// Represents history of browser
	let navigate = useNavigate();

	// Deletes a restaurant from the list
	const handleDelete = async (e, id) => {
		e.stopPropagation();
		try {
			await RestaurantFinder.delete(`/${id}`);
			setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
		} catch (err) {
			console.log(err);
		}
	};

	// Edit a restuarant from the list
	const handleEdit = (e, id) => {
		e.stopPropagation();
		navigate(`/restaurants/${id}/edit`);
	};

	// Takes user to the details page
	const handleRestaurantSelect = (id) => {
		navigate(`/restaurants/${id}`);
	};

	const renderRating = (restaurant) => {
		if (!restaurant.count) {
			return <span className="text-warning">Zero Reviews</span>;
		}
		return (
			<>
				<StarRating rating={restaurant.average_rating} />
				<span className="text-warning" style={{ marginLeft: ".5em" }}>
					({restaurant.count})
				</span>
			</>
		);
	};

	// Collects restaurants from the API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await RestaurantFinder.get("/");
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
								<tr
									onClick={() => handleRestaurantSelect(restaurant.id)}
									key={restaurant.id}
								>
									<td>{restaurant.name}</td>
									<td>{restaurant.location}</td>
									<td>{"$".repeat(restaurant.price_range)}</td>
									<td>{renderRating(restaurant)}</td>
									<td>
										<button
											className="btn btn-warning"
											onClick={(e) => {
												handleEdit(e, restaurant.id);
											}}
										>
											Edit
										</button>
									</td>
									<td>
										<button
											className="btn btn-danger"
											onClick={(e) => handleDelete(e, restaurant.id)}
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
