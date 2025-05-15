import { useContext } from "react";
import MobileNavbar from "../layout/MobileNavbar";
import PageOptions from "../layout/PageOptions";
import Border from "../utilities/Border";
import AppContext from "../store/GlobalContext";
import menuIcon from "../../public/assets/icon-hamburger.svg";

export default function Header() {
	const { navIsActive, toggleNav } = useContext(AppContext);
	return (
		<header className="w-full pt-[16px] z-10 md:hidden">
			<div className="h-[36px] px-[24px] z-[1000]  mb-[17px] flex justify-between items-center">
				<h2 className="text-white text-[28px] leading-[36px] uppercase tracking-[-1.05px] font-antonio ">
					THE PLANETS
				</h2>
				<button
					onClick={toggleNav}
					className="flex flex-col h-full justify-center gap-[4px]"
				>
					{/* <span className="w-[24px] h-[3px] bg-white"></span>
					<span className="w-[24px] h-[3px] bg-white"></span>
					<span className="w-[24px] h-[3px] bg-white"></span> */}
					<img
						src={menuIcon}
						alt=""
					/>
				</button>
			</div>
			<Border />
			<MobileNavbar isActive={navIsActive} />
			<PageOptions />
			<Border />
		</header>
	);
}
