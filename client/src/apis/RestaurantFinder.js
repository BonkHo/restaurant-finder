import axios from "axios";

// Makes requests to server simple and clean

export default axios.create({
	baseURL: "http://localhost:5000/api/v1/restaurants",
});
