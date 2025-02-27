import { LogIn } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";

export default function Navbar() {
	return (
		<header className="container mx-auto py-2 h-[80px] border-b">
			<nav className="h-full flex items-center justify-between">
				<Link to={"/"}>
					<p>Logo</p>
				</Link>

				<Link to={"/login"}>
					<Button size={"lg"} variant={"outline"}>
						<LogIn /> Login
					</Button>
				</Link>
			</nav>
		</header>
	);
}
