import { Link, NavLink } from "react-router";
import { Button } from "../ui/button";
import { navlinks } from "@/helpers/navbarItems";
import { Menu } from "lucide-react";
import {
	Drawer,
	DrawerContent,
	DrawerClose,
	DrawerDescription,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer";
export default function Navbar() {
	return (
		<header className="container mx-auto relative">
			<nav className=" flex items-center justify-between py-2 border-b">
				<>
					<Link to={"/"} className="hidden md:block">
						<img src="/logo.svg" alt="Logo" className="w-[80px] " />
					</Link>
					<div className="md:hidden">
						<Menu size={20} className="cursor-pointer" />
						<SmallDevice />
					</div>
				</>
				<ul className="hidden md:flex items-center gap-x-8">
					{navlinks.map((nav) => (
						<li>
							<NavLink to={nav.path} className="capitalize">
								{nav.name}
							</NavLink>
						</li>
					))}
				</ul>
				<Button className="text-white">Login</Button>
			</nav>
		</header>
	);
}

const SmallDevice = () => {
	return (
		<Drawer direction="left">
			<DrawerTrigger>Open</DrawerTrigger>
			<DrawerContent className="fixed inset-0 h-screen rounded-none">
				<DrawerHeader>
					<DrawerTitle>Are you absolutely sure?</DrawerTitle>
					<DrawerDescription>
						This action cannot be undone.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
