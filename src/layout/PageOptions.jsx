import { useContext } from "react";
import AppContext from "../store/GlobalContext";

const PageOptions = () => {
	const { section, changeSection, page } = useContext(AppContext);

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
		<div className="flex w-full h-[50px] items-center justify-between text-white px-[24px] md:hidden">
			<button
				onClick={() => changeSection("overview")}
				className="flex justify-center items-center relative h-full w-[80px]"
			>
				<span
					className={`font-spartan font-[700] text-[9px] text-center text-white opacity-[0.5] leading-[10px] tracking-[1.9px] mix-blend-normal uppercase`}
				>
					overview
				</span>
				<span
					className={`absolute h-[4px] w-[80px] bottom-0 left-0 transition-all   ${
						section === "overview" && bgStyle
					}`}
				></span>
			</button>
			<button
				onClick={() => changeSection("structures")}
				className="flex justify-center items-center relative h-full w-[80px]"
			>
				<span className="font-spartan font-[700] text-[9px] text-center text-white opacity-[0.5] leading-[10px] tracking-[1.9px] mix-blend-normal uppercase">
					structures
				</span>
				<span
					className={`absolute h-[4px] w-[80px] bottom-0 left-0 transition-all   ${
						section === "structures" && bgStyle
					}`}
				></span>
			</button>
			<button
				onClick={() => changeSection("surface")}
				className="flex justify-center items-center relative h-full w-[80px]"
			>
				<span className="font-spartan font-[700] text-[9px] text-center text-white opacity-[0.5] leading-[10px] tracking-[1.9px] mix-blend-normal uppercase">
					surface
				</span>
				<span
					className={`absolute h-[4px] w-[80px] bottom-0 left-0 transition-all   ${
						section === "surface" && bgStyle
					}`}
				></span>
			</button>
		</div>
	);
};

export default PageOptions;
