import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

// Components
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

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
					<h1 className="text-center mt-4">
						{selectedRestaurant.restaurant.name}
					</h1>
					<div className="m-4">
						<Reviews reviews={selectedRestaurant.reviews} />
						<AddReview />
					</div>
				</>
			)}
		</div>
	);
};

export default DetailsPage;
