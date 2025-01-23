import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
export default function LoginForm() {
	return (
		<div>
			<div className="text-center space-y-2 mb-8">
				<h1>Welcome Back</h1>
				<p className="text-muted-foreground">
					Sign in to access Resume Review AI
				</p>
			</div>

			{/* form wrapper */}
			<div className="border rounded-md p-10 text-muted-foreground">
				<Button variant={"outline"} className="w-full">
					Sign in with Google
				</Button>

				<div className="border-b-2 my-5"></div>

				<form action="" className="space-y-5">
					<div className="grid w-full items-center gap-1.5">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							id="email"
							placeholder="Your email address"
						/>
					</div>
					<div className="grid w-full items-center gap-1.5">
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							id="password"
							placeholder="Your password"
						/>
					</div>
					<Button className="w-full">Sign in</Button>
				</form>

				<div className="text-center  space-y-3 mt-5 text-sm">
					<p>
						<Link
							to={"/forgot-password"}
							className="text-muted-foreground hover:opacity-80 underline"
						>
							Forgot your password?
						</Link>
					</p>

					<p>
						<Link
							to={"/create-account"}
							className="text-muted-foreground hover:opacity-80 underline"
						>
							Don&apos;t have an account? Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
