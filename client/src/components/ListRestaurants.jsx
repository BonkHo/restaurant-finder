import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const ListRestaurants = (props) => {
	const { restaurants, setRestaurants } = useContext(RestaurantsContext);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await RestaurantFinder.get("/");
				console.log(res.data);
				setRestaurants(res.data);
			} catch (err) {}
		};
		fetchData();
	}, []);

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
					<tr>
						<td>McDonalds</td>
						<td>Los Angeles</td>
						<td>$</td>
						<td>Rating</td>
						<td>
							<button className="btn btn-warning">Edit</button>
						</td>
						<td>
							<button className="btn btn-danger">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ListRestaurants;
