import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import HomePage from "./routes/HomePage";
import DetailsPage from "./routes/DetailsPage";
import EditPage from "./routes/EditPage";
import { RestaurantsProvider } from "./context/RestaurantsContext";

function App() {
	return (
		<RestaurantsProvider>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/restaurants/:id/edit" element={<EditPage />} />
					<Route exact path="/restaurants/:id" element={<DetailsPage />} />
				</Routes>
			</Router>
		</RestaurantsProvider>
	);
}

export default App;
