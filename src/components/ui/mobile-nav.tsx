import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navlinks } from "@/helpers/navbarItems";
import { Menu } from "lucide-react";
import { NavLink } from "react-router";

export default function MobileNav() {
	return (
		<aside className="md:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Menu className="my-2 cursor-pointer" />
				</SheetTrigger>
				<SheetContent side={"left"}>
					<ul className="space-y-2 mt-10">
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
				</SheetContent>
			</Sheet>
		</aside>
	);
}
