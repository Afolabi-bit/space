import { useContext } from "react";
import MobileNavbar from "../layout/MobileNavbar";
import PageOptions from "../layout/PageOptions";
import Border from "../utilities/Border";
import AppContext from "../store/GlobalContext";
import menuIcon from "../../public/assets/icon-hamburger.svg";
import Navbar from "../layout/Navbar";

export default function Header() {
	const { toggleNav } = useContext(AppContext);
	return (
		<header className="w-full pt-[16px] z-10 md:pt-[32px] lg:h-[85px] lg:p-0">
			<div className="h-[36px] px-[24px] z-[1000]  mb-[17px] flex justify-between items-center md:justify-center md:flex-col md:h-full md:mb-[27px] lg:flex-row lg:m-0">
				<div className="flex w-full h-full justify-between items-center md:justify-center lg:justify-start">
					<h2 className="text-white text-[28px] leading-[36px] uppercase tracking-[-1.05px] font-antonio font-[400]">
						THE PLANETS
					</h2>
					<button
						onClick={toggleNav}
						className="flex flex-col h-full justify-center gap-[4px] md:hidden"
					>
						<img
							src={menuIcon}
							alt=""
						/>
					</button>
				</div>

				{/* Tablet & Desktop */}
				<Navbar />
			</div>

			<Border />

			{/* Mobile */}
			<MobileNavbar />
			<PageOptions />
			<div className="md:hidden">
				<Border />
			</div>
		</header>
	);
}
