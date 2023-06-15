import Link from "next/link";

export default function Realm({ type, size = 4 }) {
	let background, name;

	switch (type) {
		case "client":
			background = "#dea909";
			name = "Client";
			break;
		case "server":
			background = "#03a9f4";
			name = "Server";
			break;
		case "menu":
			background = "#4caf50";
			name = "Menu";
			break;
		case "shared":
			background = "linear-gradient(45deg, #dea909 53%, #03a9f4 53.001%)";
			name = "Client & Server";
			break;
		case "all":
			background = "linear-gradient(45deg, #4caf50 35.99%, #dea909 36%, #dea909 63%, #03a9f4 63.01%)";
			name = "All Realms";
			break;
		default:
			return <p>Invalid realm</p>;
	}

	return (
		<Link
			className={`${size} aspect-square block`}
			href="https://wiki.facepunch.com/gmod/States" target="_blank"
			title={name}
		>
			<div
				className="w-full h-full rounded"
				style={{ background: background }}
			/>
		</Link>
	);
}