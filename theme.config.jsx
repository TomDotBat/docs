export default {
	logo: <strong>Tom.docs</strong>,
	project: {
		link: "https://github.com/TomDotBat/docs"
	},
	docsRepositoryBase: "https://github.com/TomDotBat/docs/tree/master",
	editLink: {
		text: "Edit this page →"
	},
	feedback: {
		content: "Create an issue →",
		labels: "feedback"
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Tom.docs",
			description: "The documentation for Tom's projects.",
			openGraph: {
				siteName: "Tom.docs",
				type: "website",
				locale: "en_GB",
				url: "https://docs.tomdotbat.dev",
				description: "The documentation for Tom's projects."
			}
		};
	},
	footer: {
		text: (
			<span>
				<a href="https://mit-license.org/" target="_blank">
					MIT License
				</a>
				{` – © ${new Date().getFullYear()} `}
				<a href="https://tomdotbat.dev" target="_blank">
					Tom O'Sullivan
				</a>
			</span>
		)
	}
}