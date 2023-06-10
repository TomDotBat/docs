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
				type: "website",
				locale: "en_GB",
				url: "https://docs.tomdotbat.dev",
				site_name: "Tom.docs"
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