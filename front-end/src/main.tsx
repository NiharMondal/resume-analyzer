import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Analyzer from "./pages/Analyzer";
import Result from "./pages/Result";
import RootLayout from "./layouts/RootLayout";
import App from "./App";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<RootLayout />}>
					<Route path="/" element={<App />} />
					<Route path="/analyzer" element={<Analyzer />} />
					<Route path="/result" element={<Result />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
