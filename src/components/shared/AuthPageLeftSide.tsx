import { AudioLines, Brain, DollarSign, Users } from "lucide-react";

export default function AuthPageLeftSide() {
	return (
		<aside className="space-y-5">
			<div className="flex gap-x-3">
				<div role="icon" className="mt-2">
					<AudioLines size={20} className="opacity-90" />
				</div>
				<>
					<div className="space-y-1">
						<h5>Track Your Resume/CV</h5>
						<p className="text-muted-foreground">
							See your resume/CV's score! You will see what is
							your strong points. AI will suggests you to areas
							for improvement.
						</p>
					</div>
				</>
			</div>
			<div className="flex gap-x-3">
				<div role="icon" className="mt-2">
					<Users size={20} className="opacity-90" />
				</div>
				<>
					<div className="space-y-1">
						<h5>Track Your Candidates</h5>
						<p className="text-muted-foreground">
							Keep all your CV analyses in one place. Easily
							review and compare candidates to make better hiring
							decisions.
						</p>
					</div>
				</>
			</div>
			<div className="flex gap-x-3">
				<div role="icon" className="mt-2">
					<Brain size={20} className="opacity-90" />
				</div>
				<>
					<div className="space-y-1">
						<h5>AI-Powered Analysis</h5>
						<p className="text-muted-foreground">
							Get instant, detailed insights about each
							candidate's skills, experience, and potential fit
							for your roles.
						</p>
					</div>
				</>
			</div>
			<div className="flex gap-x-3">
				<div role="icon" className="mt-2">
					<DollarSign size={20} className="opacity-90" />
				</div>
				<>
					<div className="space-y-1">
						<h5>Completely Free</h5>
						<p className="text-muted-foreground">
							Access all features at no cost. We believe in making
							recruitment tools accessible to everyone.
						</p>
					</div>
				</>
			</div>
		</aside>
	);
}
