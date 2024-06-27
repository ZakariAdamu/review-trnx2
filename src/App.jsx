import { useState } from "react";

import "./App.css";
import ItemCategory from "./components/ItemCategory";
import TransactionDetails from "./components/TransactionDetails";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<ItemCategory />
			<TransactionDetails />
		</>
	);
}

export default App;
