import { useContext } from "react";
import AppContext from "../store/GlobalContext";

const Navbar = () => {
	const { page, changePage, changeSection } = useContext(AppContext);

	const planets = [
		"Mercury",
		"Venus",
		"Earth",
		"Mars",
		"Jupiter",
		"Saturn",
		"Uranus",
		"Neptune",
	];

	return (
		<nav className="hidden md:flex justify-between gap-[33px] w-[665px] mt-[39px]">
			{planets.map((planet, index) => {
				return (
					<button
						onClick={() => {
							changePage(planet);
							changeSection("overview");
						}}
						className="font-spartan font-[700] text-[11px] leading-[25px] tracking-[1px] uppercase text-white"
						key={index}
					>
						{planet}
					</button>
				);
			})}
		</nav>
	);
};

export default Navbar;
