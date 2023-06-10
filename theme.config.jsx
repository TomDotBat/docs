import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs/.";

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
			titleTemplate: "%s – Tom.docs"
		};
	},
	head() {
		const { asPath, defaultLocale, locale } = useRouter();
		const { frontMatter } = useConfig();

		const url = "https://docs.tomdotbat.dev"
			+ (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

		return (
			<>
				<meta property="og:url" content={url} />
				<meta property="og:title" content={frontMatter.title || "Unknown"} />
				<meta property="og:description" content={frontMatter.description || "The documentation for Tom's projects."} />
				<meta property="og:locale" content={locale} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Tom.docs" />
			</>
		);
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