import { useState } from "react";

import "./App.css";
import ItemCategory from "./components/ItemCategory";
import TransactionDetails from "./components/TransactionDetails";

function App() {
	const [count, setCount] = useState(0);

	return (
    <>
      <ItemCategory />
      <TransactionDetails/>
     
      <h2 className="text-orange-500">Happy new year!!!</h2>
		</>
	);
}

export default App;
