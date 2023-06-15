import Link from "next/link";

export default function Argument({ type, name, defaultValue, children }) {
	return (
		<>
			<h3 class="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-6">
				<Link className="nx-text-primary-600 nx-decoration-from-font [text-underline-position:from-font]" href={`https://wiki.facepunch.com/gmod/${type}`} target="_blank">
					{type}
				</Link>
				{` ${name}`}
				{
					defaultValue && (
						<span class="nx-text-gray-500 dark:nx-text-gray-400">
							{` = ${defaultValue}`}
						</span>
					)
				}
			</h3>
			<p class="nx-leading-7 first:nx-mt-0">
				{children}
			</p>
		</>
	);
}