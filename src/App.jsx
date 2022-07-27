import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./pages/index/Index";
import InitialConfigaration from "./pages/InitialConfigaration/InitialConfigaration";
import { SelectTheme } from "./pages/selectTheme/SelectTheme";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" caseSensitive element={<Index />} />
				<Route path="/Temas" caseSensitive element={<SelectTheme />} />
				<Route path="/PrimerosPasos" caseSensitive element={<InitialConfigaration />} />
			</Routes>
		</Router>
	);
}

export default App;
