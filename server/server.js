require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./db");
const PORT = process.env.PORT || 5000;

// Middleware app.use(req, res, next)...

// Morgan is asynchrounous
app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
	console.log("This is my custom middleware!");
	next();
});

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
	try {
		console.log(req.body);
		res.status(201).json({
			message: "Restaurant created successfully",
		});
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
});

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM restaurants;");
		console.log(result.rows);
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
});

// Get a restaurant by id
app.get("/api/v1/restaurants/:id", async (req, res) => {
	try {
		console.log(req.params);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: {
					id: req.params.id,
					name: "McDonalds",
					location: "USA",
					rating: "4.5",
					reviews: ["Great food!", "Good service!"],
				},
			},
		});
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
});

// Edit a restaurant by id
app.put("/api/v1/restaurants/:id", async (req, res) => {
	try {
		console.log(req.params.id);
		console.log(req.body);
		res.status(200).send("Restaurant updated successfully");
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
});

// Delete a restaurant by id
app.delete("/api/v1/restaurants/:id", async (req, res) => {
	try {
		res.status(200).send("Restaurant deleted successfully");
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
});

app.listen(PORT, () => {
	console.log(`Server is running at: http://localhost:${PORT}`);
});
