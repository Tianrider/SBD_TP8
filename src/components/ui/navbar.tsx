import {ModeToggle} from "../mode-toggle";
import {Navbar1} from "../shadcnblocks-com-navbar1";

const demoData = {
	logo: {
		url: "#",
		src: "/SBDLogo.svg",
		alt: "netlab",
		title: "netlab 2025",
	},
	menu: [
		{
			title: "OS",
			url: "#os",
		},
		{
			title: "DMJ",
			url: "#dmj",
		},
		{
			title: "SBD",
			url: "#sbd",
		},
	],
	mobileExtraLinks: [
		{name: "Press", url: "/press"},
		{name: "Contact", url: "/contact"},
		{name: "Imprint", url: "/imprint"},
		{name: "Sitemap", url: "/sitemap"},
	],
};

export default function Navbar() {
	return (
		<div className="w-full px-8 z-[100] fixed">
			<div className="flex justify-end gap-8 items-center">
				<div className="hidden lg:flex">
					<ModeToggle />
				</div>
				<Navbar1 {...demoData} />
			</div>
		</div>
	);
}
