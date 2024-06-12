"use client"
import { CldImage } from "next-cloudinary"

export default function HomeImage() {
	return (
		<CldImage
			width={600}
			height={600}
			src="GameStore/home"
			alt="Home Image"
		/>
	)
}