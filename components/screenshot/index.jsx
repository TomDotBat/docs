//https://github.com/shuding/nextra/blob/5eef7d7ad5aa2ac8a13bcc83ec6f01c5ab73a019/docs/components/screenshot/index.jsx
import cn from "clsx";
import Image from "next/image";

export default function Screenshot({ src, alt, full }) {
	return (
	  <div
	    className={cn(
			"-mb-4 mt-6 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",
			full ? "bg-white" : "bg-zinc-100"
	    )}
	  >
	    <Image
			src={src}
			alt={alt}
			className={cn(
				"w-auto select-none bg-black",
				full ? "" : "ring-1 ring-gray-200"
			)}
	    />
	  </div>
	);
}