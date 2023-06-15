import Link from "next/link";
import { useRouter } from "next/router";

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
	banner: {
		dismissible: true,
		key: "indev",
		text: "⚠️ This site is under development, some artefacts may be missing or incomplete."
	},
	sidebar: {
		defaultMenuCollapseLevel: 1
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Tom.docs"
		};
	},
	head() {
		const { asPath, defaultLocale, locale } = useRouter();

		const url = "https://docs.tomdotbat.dev"
			+ (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

		return (
			<>
				<meta property="og:url" content={url} />
				<meta property="og:description" content="The documentation for Tom's projects." />
				<meta property="og:locale" content={locale || "en_GB"} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Tom.docs" />
			</>
		);
	},
	footer: {
		text: (
			<span>
				<Link href="https://mit-license.org/" target="_blank">
					MIT License
				</Link>
				{` – © ${new Date().getFullYear()} `}
				<Link href="https://tomdotbat.dev" target="_blank">
					Tom O'Sullivan
				</Link>
			</span>
		)
	}
}