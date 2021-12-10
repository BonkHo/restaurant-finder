import React from "react";

// Components
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import ListRestaurants from "../components/ListRestaurants";

const HomePage = () => {
	return (
		<div>
			<Header />
			<AddRestaurant />
			<ListRestaurants />
		</div>
	);
};

export default HomePage;
