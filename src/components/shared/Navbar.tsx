import { Link, NavLink } from "react-router";
import { Button } from "../ui/button";
import { navlinks } from "@/helpers/navbarItems";
import MobileNav from "../ui/mobile-nav";

export default function Navbar() {
	return (
		<header className="container mx-auto py-2 border-b">
			{/** desktop  */}
			<DesktopView />

			{/** mobile */}
			<MobileNav />
		</header>
	);
}

// for desktop view
const DesktopView = () => {
	return (
		<nav className="hidden md:flex items-center justify-between">
			<Link to={"/"}>
				<img src="/logo.svg" alt="Logo" className="w-[80px] " />
			</Link>

			<ul className="flex items-center gap-x-8">
				{navlinks.map((nav) => (
					<li key={nav.name}>
						<NavLink
							to={nav.path}
							className={({ isActive }) =>
								isActive
									? "text-primary font-medium capitalize"
									: "capitalize"
							}
						>
							{nav.name}
						</NavLink>
					</li>
				))}
			</ul>
			<Button variant={"outline"}>Login</Button>
		</nav>
	);
};
