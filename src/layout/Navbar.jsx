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

	const accents = {
		Mercury: "bg-[#419EBB]",
		Venus: "bg-[#EDA249]",
		Earth: "bg-[#6D2ED5]",
		Mars: "bg-[#D14C32]",
		Jupiter: "bg-[#D83A34]",
		Saturn: "bg-[#CD5120]",
		Uranus: "bg-[#1EC1A2]",
		Neptune: "bg-[#2D68F0]",
	};

	const bgStyle = accents[Object.keys(accents).find((key) => key === page)];

	return (
		<nav className="hidden md:flex justify-between gap-[33px] w-[665px] mt-[39px] lg:m-0 lg:h-full">
			{planets.map((planet, index) => {
				return (
					<button
						onClick={() => {
							changePage(planet);
							changeSection("overview");
						}}
						className="font-spartan font-[700] text-[11px] leading-[25px] tracking-[1px] uppercase text-white lg:relative"
						key={index}
					>
						{planet}
						{page === planet && (
							<span
								className={`hidden lg:inline-block w-full h-[4px] absolute top-0 left-0 ${bgStyle}`}
							></span>
						)}
					</button>
				);
			})}
		</nav>
	);
};

export default Navbar;
