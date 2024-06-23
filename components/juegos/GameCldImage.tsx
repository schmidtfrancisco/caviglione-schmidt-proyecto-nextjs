"use client";

import { CldImage } from "next-cloudinary";

export default function GameCldImage(
	{width = 600, height = 600, src, alt = "", style, className, loading = "lazy"}: 
	{width?: number, height?: number, src: string, alt?: string, style?: any, className?: string, loading?: any}
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
			loading={loading}
		/>
	)
}

export function CategoryCldImage({src, alt = "", style, className}:
{src: string, alt?: string, style?: any, className?: string}
) {
	return (
		<CldImage
			width={600}
			height={600}
			src={src}
			alt={alt}
			className={className}
			style={style}
		/>
	)
}