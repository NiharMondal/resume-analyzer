import RegisterForm from "@/components/shared/auth/RegisterForm";
import AuthPageLeftSide from "@/components/shared/AuthPageLeftSide";

export default function Register() {
	return (
		<section className=" max-w-4xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-content-center h-svh">
				<div className="order-last md:order-first">
					<AuthPageLeftSide />
				</div>
				<RegisterForm />
			</div>
		</section>
	);
}
