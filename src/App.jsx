import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./pages/index/Index";
import InitialConfigaration from "./pages/InitialConfigaration/InitialConfigaration";
import { SelectTheme } from "./pages/selectTheme/SelectTheme";
import { Login } from "./pages/templateBank/Login";
import { Index as IndexBank } from "./pages/templateBank/Index/Index";
import { Transfer } from "./pages/templateBank/Transfer/Transfer";
import { Web } from "./pages/web/Web";
import SelectServices from "./pages/services/SelectServices"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" caseSensitive element={<Index />} />
				<Route path="/Temas" caseSensitive element={<SelectTheme />} />
				<Route path="/PrimerosPasos" caseSensitive element={<InitialConfigaration />} />
				<Route path="/Login" caseSensitive element={<Login />} />
				<Route path="/PosicionConsolidada" caseSensitive element={<IndexBank />} />
				<Route path="/Transferencias" caseSensitive element={<Transfer />} />
				<Route path="/Web" caseSensitive element={<Web />} />
				<Route path="/Servicios" caseSensitive element={<SelectServices />} />
			</Routes>
		</Router>
	);
}

export default App;
