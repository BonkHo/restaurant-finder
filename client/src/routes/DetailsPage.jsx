import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

// Components
import Reviews from "../components/Reviews";

const DetailsPage = () => {
	const { id } = useParams();

	const { selectedRestaurant, setSelectedRestaurant } =
		useContext(RestaurantsContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await RestaurantFinder.get(`/${id}`);
				setSelectedRestaurant(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [id, setSelectedRestaurant]);

	return (
		<div>
			{selectedRestaurant && (
				<>
					<div className="mt-3">
						<Reviews />
					</div>
				</>
			)}
		</div>
	);
};

export default DetailsPage;
