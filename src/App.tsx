import {AnimatedText} from "./components/animated-text";
import {HeroParallax} from "./components/hero-parallax";
import {Footer} from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import {GitHubLogoIcon, TwitterLogoIcon} from "@radix-ui/react-icons";

export default function App() {
	return (
		<>
			<Navbar />
			<div className="min-h-screen w-full">
				<div className="left-0 w-full">
					<HeroParallax products={products} />
				</div>
				<div className="flex flex-col gap-40">
					<AnimatedText
						id="os"
						title="OS"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente consequuntur eius error quasi ad exercitationem eaque recusandae? Odio vero optio laudantium tempore culpa repellat error consectetur nemo exercitationem maxime?"
						src="/OSLogo.svg"
					/>

					<AnimatedText
						id="dmj"
						title="DMJ"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente consequuntur eius error quasi ad exercitationem eaque recusandae? Odio vero optio laudantium tempore culpa repellat error consectetur nemo exercitationem maxime?"
						src="/DMJLogo.svg"
						inverted
					/>

					<AnimatedText
						id="sbd"
						title="SBD"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente consequuntur eius error quasi ad exercitationem eaque recusandae? Odio vero optio laudantium tempore culpa repellat error consectetur nemo exercitationem maxime?"
						src="/SBDLogo.svg"
					/>
				</div>

				<div className="pt-20">
					<Footer
						logo={
							<img
								src="/Logo.svg"
								alt="logo"
								className="h-10 w-10"
							/>
						}
						brandName="Christian Hadiwijaya - Netleb 2025"
						socialLinks={[
							{
								icon: <TwitterLogoIcon className="h-5 w-5" />,
								href: "https://twitter.com",
								label: "Twitter",
							},
							{
								icon: <GitHubLogoIcon className="h-5 w-5" />,
								href: "https://github.com",
								label: "GitHub",
							},
						]}
						mainLinks={[
							{href: "#os", label: "OS"},
							{href: "#dmj", label: "DMJ"},
							{href: "#sbd", label: "SBD"},
						]}
						legalLinks={[]}
						copyright={{
							text: "© 2025 Netleb",
							license: "All rights reserved",
						}}
					/>
				</div>
			</div>
		</>
	);
}

export const products = [
	{
		title: "DMJ",
		thumbnail: "/DMJLogo.svg",
	},
	{
		title: "OS",
		thumbnail: "/OSLogo.svg",
	},
	{
		title: "SBD",
		thumbnail: "SBDLogo.svg",
	},
];
