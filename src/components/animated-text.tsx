import {useEffect, useState} from "react";
import {Cursor} from "./ui/cursor";

export const AnimatedText = ({
	title,
	text,
	src,
	inverted = false,
	id,
}: {
	title: string;
	text: string;
	src: string;
	inverted?: boolean;
	id: string;
}) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(window.innerWidth < 768);
	}, []);

	return (
		<div
			id={id}
			className="p-8 text-5xl grid md:grid-cols-5 mx-auto max-w-5xl text-center"
		>
			<Cursor
				attachToParent
				variants={{
					initial: {height: 0, opacity: 0, scale: 0.3},
					animate: {height: "auto", opacity: 1, scale: 1},
					exit: {height: 0, opacity: 0, scale: 0.3},
				}}
				transition={{
					type: "spring",
					duration: 0.3,
					bounce: 0.1,
				}}
				className="overflow-hidden"
				springConfig={{
					bounce: 0.01,
				}}
			>
				<img src={src} alt={title} className="h-40 w-40" />
			</Cursor>
			{inverted && !isMobile ? (
				<>
					<div className="text-lg col-span-4 text-justify">
						{text}
					</div>
					<div className="text-5xl text-center font-bold col-span-1">
						{title}
					</div>
				</>
			) : (
				<>
					<div className="text-5xl text-center font-bold col-span-1">
						{title}
					</div>
					<div className="text-lg col-span-4 text-justify">
						{text}
					</div>
				</>
			)}
		</div>
	);
};
