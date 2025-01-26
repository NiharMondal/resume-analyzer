import DZone from "@/components/Dropzone";
import { FilePlus, CpuIcon, CircleCheck, ArrowRight } from "lucide-react";

export default function Home() {
	return (
		<div>
			<div className="flex flex-col items-center pt-10 px-10">
				<h1 className="leading-[2rem] md:leading-[4rem]">
					Resume Reveiw with AI
				</h1>
				<p className="text-[1.5rem] text-center text-muted-foreground">
					Professional Resume Analysis & Feedback
				</p>
			</div>

			<ul className="flex items-center justify-center gap-x-5 mt-8 icon_indicator ">
				<li className="">
					<FilePlus className="bg-muted p-3 size-12 rounded-full" />
				</li>
				<li>
					<ArrowRight size={15} />
				</li>
				<li>
					<CpuIcon className="bg-muted p-3 size-12 rounded-full" />
				</li>
				<li>
					<ArrowRight size={15} />
				</li>
				<li>
					<CircleCheck className="bg-muted p-3 size-12 rounded-full" />
				</li>
			</ul>

			<DZone />
		</div>
	);
}
