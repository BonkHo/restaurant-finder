import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

// Components
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import StarRating from "../components/StarRating";

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
					<div style={{ textAlign: "center", marginTop: ".5rem" }}>
						<a
							href="/"
							className="text-center mt-4 "
							style={{
								textDecoration: "none",
								color: "black",
								fontSize: "3rem",
							}}
						>
							{selectedRestaurant.restaurant.name}
						</a>
					</div>

					<div className="text-center">
						<StarRating rating={selectedRestaurant.restaurant.average_rating} />
						<span className="text-black" style={{ marginLeft: ".5em" }}>
							{selectedRestaurant.restaurant.count
								? `(${selectedRestaurant.restaurant.count})`
								: "(0)"}
						</span>
					</div>

					<div className="m-2">
						<Reviews reviews={selectedRestaurant.reviews} />
						<AddReview />
					</div>
				</>
			)}
		</div>
	);
};

export default DetailsPage;
