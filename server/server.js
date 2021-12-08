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
		res.status(200).json(result.rows);
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
});

// Get a restaurant by id
app.get("/api/v1/restaurants/:id", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM restaurants WHERE id=$1;", [
			req.params.id,
		]);
		res.status(200).json(result.rows);
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
});

// Edit a restaurant by id
app.put("/api/v1/restaurants/:id", async (req, res) => {
	try {
		const result = await db.query(
			"UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4;",
			[req.body.name, req.body.location, req.body.price_range, req.params.id]
		);
		res.status(200).send("Restaurant updated successfully");
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
});

// Delete a restaurant by id
app.delete("/api/v1/restaurants/:id", async (req, res) => {
	try {
		const result = await db.query("DELETE FROM restaurants WHERE id=$1;", [
			req.params.id,
		]);
		res.status(200).send("Restaurant deleted successfully");
	} catch (err) {
		res.status(500).send(err);
		console.log(err);
	}
});

app.listen(PORT, () => {
	console.log(`Server is running at: http://localhost:${PORT}`);
});
