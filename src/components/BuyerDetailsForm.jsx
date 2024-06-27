import React, { useState } from "react";

// ======= GoalForm component starts here =========
// this component captures a new goal using a form
function BuyerDetailsForm({ onAdd }) {
	const [formData, setFormData] = useState({ email: "", phone: "" });

	function changeHandler(event) {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	}

	function submitHandler(event) {
		event.preventDefault();
		onAdd(formData); // Pass the entire formData object to the parent
		setFormData({ email: "", phone: "" }); // Clear form after submission
	}

	return (
		<div>
			<h3 className="BuyerDetails pt-6 pb-5">Buyer Details</h3>

			<form className="BuyerDetailsForm" onSubmit={submitHandler}>
				<fieldset className="Email border border-solid border-grey-300 py-1 px-2 text-sm">
					<legend className="text-gray-700 py-1">Email</legend>
					<input
						className="pr-20 focus:outline-none"
						type="email"
						name="email"
						placeholder="fidelis@yourmail.com"
						value={formData.email}
						onChange={changeHandler}
					/>
				</fieldset>
		

				<input
					className="CountryMobile border border-solid border-grey-300 focus:outline-none"
					type="phone"
					name="phone"
					placeholder="+234"
					value={formData.phone}
					onChange={changeHandler}
				/>
			</form>
			<div className="text-center mt-10">
				<input className="mr-3" type="checkbox" id="agree_to_terms" />
				<label for="agree_to_terms">
					I have read and agree to the{" "}
					<a className="text-orange-500" href="terms_and_conditions.html">
						SafeTra Terms & Conditions <span className="pr-2 text-black">and</span>Privacy Policy
					</a>
				</label>
			</div>
			<button className="SubmitBtn hover:bg-gray-500" type="submit">
				Start Transaction
			</button>
		</div>
	);
}

// ======= End of GoalForm component =========

export default BuyerDetailsForm;
