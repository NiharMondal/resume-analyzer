import { Upload } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useToast } from "@/hooks/use-toast";

export default function DZone() {
	const { toast } = useToast();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onDrop = useCallback(
		(acceptedFiles: any) => {
			const file = acceptedFiles[0];
			if (file.type !== "text" || file.type === "PDF") {
				toast({ title: "Supports only PDF or TXT file" });
			}
		},
		[toast]
	);
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
	});
	return (
		<div
			className="mt-16 border border-muted-foreground/70 border-dashed border-spacing-80 p-10 hover:border-muted-foreground max-w-2xl mx-auto rounded-md cursor-pointer"
			{...getRootProps()}
		>
			<div className="flex flex-col items-center justify-center">
				<div className="min-h-20 min-w-20 rounded-full bg-accent flex items-center justify-center">
					<Upload className="custom_jump_animation" size={30} />
				</div>
				<h5 className="mt-4">Upload Resume</h5>
			</div>

			<div className="flex flex-col items-center justify-center">
				<input {...getInputProps()} />
				<div className="mt-5  text-muted-foreground text-center">
					<p>Drag and drop your Resume here or click to browse</p>
					<p>
						<small>Supports PDF and TXT files up to 5MB</small>
					</p>
				</div>
			</div>
		</div>
	);
}
