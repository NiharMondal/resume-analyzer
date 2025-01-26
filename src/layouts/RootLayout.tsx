import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/toaster";
export default function RootLayout() {
	return (
		<main>
			<Navbar />
			<div className="w-full container mx-auto py-5">
				<Outlet />
			</div>
			<Toaster />
		</main>
	);
}
