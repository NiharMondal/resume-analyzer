import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
	return (
		<main>
			<Navbar />
			<div className="container mx-auto py-5">
				<Outlet />
			</div>
		</main>
	);
}
