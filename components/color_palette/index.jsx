const hexToRgb = (hex) => {
	const color = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
	return [
		parseInt(color[1], 16),
		parseInt(color[2], 16),
		parseInt(color[3], 16)
	];
};

const hexToColor = (hex) => {
	const rgb = hexToRgb(hex);
	return `Color(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

const getLightness = (hex) => {
	const rgb = hexToRgb(hex);
	return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};

const isLight = (hex) => getLightness(hex) > 150;

export default function ColorPalette({ colors }) {
	return (
		<div className="flex flex-wrap -mx-3 text-sm">
			{
				Object.keys(colors).map((name, idx) => (
					<div className="flex-none w-44 px-3 mt-6" key={idx}>
						<h3 className="text-base nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
							{name}
						</h3>
						<div className="flex items-center h-20 mb-2 rounded-lg border dark:border-zinc-800" style={{ backgroundColor: colors[name] }}>
							<p className={`grow text-sm font-medium text-center ${isLight(colors[name]) ? "nx-text-gray-900" : "nx-text-gray-100"}`}>
								{hexToColor(colors[name])}
							</p>
						</div>
					</div>
				))
			}
		</div>
	);
}