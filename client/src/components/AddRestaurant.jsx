import React from "react";

const AddRestaurant = () => {
	return (
		<div className="mb-4">
			<form className="d-flex justify-content-center">
				<div className="row">
					<div className="col">
						<input className="form-control" type="text" placeholder="Name" />
					</div>
					<div className="col">
						<input
							className="form-control"
							type="text"
							placeholder="Location"
						/>
					</div>
					<div className="col">
						<select className="form-select">
							<option disabled selected>
								Price Range
							</option>
							<option value="1">$</option>
							<option value="2">$$</option>
							<option value="3">$$$</option>
							<option value="4">$$$$</option>
						</select>
					</div>
					<button className="btn btn-primary col">Add</button>
				</div>
			</form>
		</div>
	);
};

export default AddRestaurant;
