export default function YouTubeVideo({ id, title }) {
	return (
		<div className="mt-6 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800">
			<iframe 
				src={`https://www.youtube.com/embed/${id}`}
				className="w-full aspect-video"
				title={title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			>
			</iframe>
		</div>
	);
}