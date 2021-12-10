import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import HomePage from "./routes/HomePage";
import DetailsPage from "./routes/DetailsPage";
import UpdatePage from "./routes/UpdatePage";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route
						exact
						path="/restaurants/:id/update"
						element={<UpdatePage />}
					/>
					<Route exact path="/restaurants/:id" element={<DetailsPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
