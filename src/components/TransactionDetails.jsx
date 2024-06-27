import React from "react";
import BuyerDetailsForm from "./BuyerDetailsForm";
// import styles from "./TransactionDetails.module.css";

function TransactionDetails() {
	return (
		<div>
			<div className="TransactionDetails1">
				<h4 className="font-medium">Transaction Details</h4>

				<div className="border flex mt-6 mb-6 py-4 px-5">
					<div className="item">
						<h5 className="font-medium">Selling a Mansion</h5>
						<ul>
							<li>Buildings/Landed Properties</li>
							<li>This house is along sea side estate.</li>
							<li>Inspection Period: 2 days</li>
						</ul>
					</div>
					<div className="item">
						<h5 className="font-medium">NGN78,000,000.00</h5>
					</div>
				</div>
				<button className="AddItem py-2 px-3 rounded-md">Add Item</button>
			</div>

			<div className="TransactionDetails2 flex mt-20 mb-6">
				<div className="transaction-breakdownRight">
					<h4 className="font-medium">Transaction Details</h4>
					<ul>
						<li>Sub total:</li>
						<li>Shipping fee:</li>
						<li>
							Escrow fee paid by:{" "}
							<span className="text-green-600">Buyer & Seller 50/50</span>
						</li>
					</ul>
				</div>
				<div className="transaction-breakdownLeft text-right">
					<h4 className="font-medium text-purple-700 ">
						How the totals are calculated
					</h4>
					<ul>
						<li>NGN78,000,000.00</li>
						<li>NGN2,000.00</li>
						<li>NGN4,000.00</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className="TransactionTotal flex mt-6">
				<div>
					<ul className="narrations order-first">
						<li>Buying Price:</li>
						<li>Seller Earnings:</li>
					</ul>
				</div>
				<div className="text-right">
					<ul className="amount order-last">
						<li>NGN184,000,000.00</li>
						<li>NGN190,000.00</li>
					</ul>
				</div>
			</div>
			<p className="customer-notice py-6 text-center text-gray-500">
				All prices are in NGN, Taxes applies
			</p>
			<div className="BuyerContainer">
				<div></div>
			</div>
			<BuyerDetailsForm />
			<footer></footer>
		</div>
	);
}

export default TransactionDetails;
