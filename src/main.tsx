import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import Analyzer from "./pages/Analyzer";
import Result from "./pages/Result";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<App />} />
				<Route path="/analyzer" element={<Analyzer />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
