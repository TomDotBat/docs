import Link from "next/link";

const listTypes = (types) => types.map((type, idx) => {
	return (
		<>
			<Link className="nx-text-primary-600 nx-decoration-from-font [text-underline-position:from-font]" href={`https://wiki.facepunch.com/gmod/${type}`} target="_blank">
				{type}
			</Link>
			{`${idx === types.length - 1 ? "" : ", "}`}
		</>
	);
});

export default function MethodList({ methods }) {
	return (
		<div class="mt-2 ml-4 mb-12 pl-6">
			{
				methods.map((method) => (
					<div className="mt-4">
						<code className="text-[.9em] min-h-5 align-middle">
							{(method.returns && method.returns.length > 0) && listTypes(method.returns, true)}
							{" "}
							{method.parent}
							{
								method.href ? (
									<>
										<Link className="nx-text-primary-600 nx-decoration-from-font [text-underline-position:from-font]" href={method.href}>
											{method.name}
										</Link>
										{"("}
									</>
								) : (`${method.name}(`)
							}
							{
								(method.args && method.args.length > 0) && (
									<>
										{" "}
										{listTypes(method.args)}
										{" "}
									</>
								)
							}
							{")"}
						</code>
						<p>
							{method.description}
						</p>
					</div>
				))
			}
		</div>
	);
}