import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Analyzer from "./pages/Analyzer";
import Result from "./pages/Result";
import RootLayout from "./layouts/RootLayout";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<RootLayout />}>
					<Route path="/" element={<App />} />
					<Route path="/analyzer" element={<Analyzer />} />
					<Route path="/result" element={<Result />} />
					<Route path="/login" element={<Login />} />
					<Route path="/create-account" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
