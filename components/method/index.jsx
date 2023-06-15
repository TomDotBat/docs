import cn from "clsx";
import Link from "next/link";

import Realm from "../realm";

function LinkButton({ href, icon, title, ...props }) {
	return (
		<Link
			href={href} target="_blank"
			className={cn(
				"nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200",
				"nx-no-underline dark:nx-shadow-none",
				"hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100",
				"active:nx-shadow-sm active:nx-shadow-gray-200",
				"nx-transition-all nx-duration-200 hover:nx-border-gray-300",
				"nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900 text-sm"
			)}
			{...props}
		>
			<span
				className={cn(
					"nx-flex nx-font-semibold nx-items-start nx-gap-1 nx-text-gray-700 hover:nx-text-gray-900 px-3 py-2",
					"dark:nx-text-neutral-200 dark:hover:nx-text-neutral-50"
				)}
			>
				{icon}
				{title}
			</span>
		</Link>
	);
}

export default function Method({ name, realm, args, returns, repositoryUrl, declaration, children}) {
	const listValues = (values, typesOnly) => values.map((val, idx) => {
		const { type, name, defaultValue } = val.props;
		return (
			<>
				<Link className="nx-text-primary-600 nx-decoration-from-font [text-underline-position:from-font]" href={`https://wiki.facepunch.com/gmod/${type}`} target="_blank">
					{type}
				</Link>
				{typesOnly ? "" : ` ${name ?? ""}${defaultValue ? ` = ${defaultValue}` : ""}`}
				{`${idx === values.length - 1 ? "" : ", "}`}
			</>
		);
	});

	return (
		<>
			<div className="mt-6 nx-bg-primary-700/5 nx-overflow-x-auto nx-rounded-xl dark:nx-bg-primary-300/10 contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 px-4 py-3 flex">
				<Realm type={realm} size="h-5" />
				<code className="ml-3 text-[.8em] min-h-5 align-middle">
					{(returns && returns.length > 0) && listValues(returns, true)}
					{` ${name}(`}
					{
						(args && args.length > 0) && (
							<>
								{" "}
								{listValues(args)}
								{" "}
							</>
						)
					}
					{")"}
				</code>
			</div>
			{
				repositoryUrl && (
					<div className="flex flex-row-reverse space-x-4 space-x-reverse mt-3">
						<LinkButton
							href={`${repositoryUrl}/search?utf8=%E2%9C%93&q=${name}`}
							title="Search GitHub"
							icon={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="m-auto h-4 fill-current"
								>
									<path d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"/>
								</svg>
							}
						/>
						{
							declaration && (
								<LinkButton
									href={`${repositoryUrl}/blob/master/${declaration}`}
									title="View Source"
									icon={
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 448 512"
											className="m-auto h-4 fill-current"
										>
											<path d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32c0 35.8-23.5 66.1-56 76.3V256c20.1-15.1 45-24 72-24h96c39.8 0 72-32.2 72-72v-3.7c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V160c0 66.3-53.7 120-120 120H176c-39.8 0-72 32.2-72 72v3.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V352 156.3C23.5 146.1 0 115.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm240 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM80 464a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
										</svg>
									}
								/>
							)
						}
					</div>
				)
			}
			{
				children && (
					<>
						<h2 class="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">
							Description
						</h2>
						{children}
					</>
				)
			}
			{
				(args && args.length > 0) && (
					<>
						<h2 class="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">
							Arguments
						</h2>
						<div class={`${args.length > 1 ? "nextra-steps " : ""}nx-ml-4 nx-mb-12 nx-pl-6 [counter-reset:step]`}>
							{args}
						</div>
					</>
				)
			}
			{
				(returns && returns.length > 0) > 0 && (
					<>
						<h2 class="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">
							Returns
						</h2>
						<div class={`${returns.length > 1 ? "nextra-steps " : ""}nx-ml-4 nx-mb-12 nx-pl-6 [counter-reset:step]`}>
							{returns}
						</div>
					</>
				)
			}
		</>
	);
}