/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		extend: {
			colors: {
				background: "var(--background)", //Light Gray
				foreground: "var(--foreground)", //Dark Gray
				primary: "var(--primary)", //Deep Blue
				secondary: "var(--secondary)", //Sky Blue
				accent: "var(--accent)", // Green
			},
			fontFamily: {
				roboto: ["Roboto", "serif"],
				merriweather: ["Merriweather", "serif"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
