//https://github.com/shuding/nextra/blob/5eef7d7ad5aa2ac8a13bcc83ec6f01c5ab73a019/docs/components/video/index.jsx
export default function Video({ src }) {
	return (
		<video
			muted
			autoPlay
			playsInline
			loop
			controls
			className="mt-6 rounded-xl border dark:border-zinc-800"
		>
			<source src={src} type="video/mp4" />
		</video>
	);
}