"use client"
import { CldImage } from "next-cloudinary"

export default function GameCldImage(
	{width = 600, height = 600, src, alt = "", style, className}: 
	{width?: number, height?: number, src: string, alt?: string, style?: any, className?: string}
) {
	return (
		<CldImage
			width={width}
			height={height}
			src={src}
			alt={alt}
			className={className}
			style={style}
			crop={"pad"}
		/>
	)
}