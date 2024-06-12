"use client"
import { CldImage } from "next-cloudinary"

export default function HomeImage({width = 600, height = 600, src, alt = ""}: {width?: number, height?: number, src: string, alt?: string}) {
	return (
		<CldImage
			width={width}
			height={height}
			src={src}
			alt={alt}
		/>
	)
}