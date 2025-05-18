import { useContext } from "react";
import icon from "../../public/assets/icon-source.svg";
import DetailsCard from "../utilities/DetailsCard";
import AppContext from "../store/GlobalContext";
import FooterData from "../layout/FooterData";

const Hero = ({ images, name, text, wiki_link, details }) => {
	const { section, page, changeSection } = useContext(AppContext);

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

	let mobileImageDimension;
	switch (name) {
		case "Mercury":
			mobileImageDimension = "111px";
			break;

		case "Venus":
			mobileImageDimension = "154px";
			break;

		case "Earth":
			mobileImageDimension = "173px";
			break;

		case "Mars":
			mobileImageDimension = "129px";
			break;

		case "Jupiter":
			mobileImageDimension = "224px";
			break;

		case "Saturn":
			mobileImageDimension = "256px";
			break;

		case "Uranus":
			mobileImageDimension = "176px";
			break;
		case "Neptune":
			mobileImageDimension = "173px";
			break;

		default:
			break;
	}

	let tabletImageDimension;
	switch (name) {
		case "Mercury":
			tabletImageDimension = "184px";
			break;

		case "Venus":
			tabletImageDimension = "253px";
			break;

		case "Earth":
			tabletImageDimension = "285px";
			break;

		case "Mars":
			tabletImageDimension = "213px";
			break;

		case "Jupiter":
			tabletImageDimension = "369px";
			break;

		case "Saturn":
			tabletImageDimension = "422px";
			break;

		case "Uranus":
			tabletImageDimension = "290px";
			break;
		case "Neptune":
			tabletImageDimension = "285px";
			break;

		default:
			break;
	}
	let desktopImageDimension;
	switch (name) {
		case "Mercury":
			desktopImageDimension = "290px";
			break;

		case "Venus":
			desktopImageDimension = "400px";
			break;

		case "Earth":
			desktopImageDimension = "450px";
			break;

		case "Mars":
			desktopImageDimension = "336px";
			break;

		case "Jupiter":
			desktopImageDimension = "582px";
			break;

		case "Saturn":
			desktopImageDimension = "666.1px";
			break;

		case "Uranus":
			tabletImageDimension = "458px";
			break;
		case "Neptune":
			tabletImageDimension = "450px";
			break;

		default:
			break;
	}

	return (
		<>
			{/* Mobile and tablet */}
			<div className="hero px-[24px] md:px-[40px] md:pt-[0] lg:hidden">
				{/* Images for mobile screens */}
				<div
					style={{
						height: mobileImageDimension,
						width: mobileImageDimension,
					}}
					className="img-wrapper-mobile  md:hidden"
				>
					{section !== "structures" && (
						<img
							src={images.planet}
							alt=""
						/>
					)}
					{section === "structures" && (
						<img
							src={images.internal}
							alt=""
						/>
					)}
					{section === "surface" && (
						<img
							className={
								page === "Saturn"
									? "saturn geology transition-all"
									: "geology transition-all"
							}
							src={images.geology}
							alt=""
						/>
					)}
				</div>

				{/* Images for Tablet screens */}
				<div className="hidden  md:flex justify-center items-center w-full h-[460px] lg:hidden">
					<div
						style={{
							height: tabletImageDimension,
							width: tabletImageDimension,
						}}
						className="img-wrapper-tablet  relative"
					>
						{section !== "structures" && (
							<img
								className="object-contain"
								src={images.planet}
								alt=""
							/>
						)}
						{section === "structures" && (
							<img
								className="object-contain"
								src={images.internal}
								alt=""
							/>
						)}
						{section === "surface" && (
							<img
								className={`${
									page === "Saturn" && "bottom-[1px]"
								} absolute w-[120px] h-[120px] object-contain left-[50%] translate-x-[-50%] bottom-[-90px]`}
								src={images.geology}
								alt=""
							/>
						)}
					</div>
				</div>

				<div className="md:flex items-center gap-[69px] lg:hidden">
					<div className="text text-center md:min-w-[339px]  md:text-left">
						<h1>{name}</h1>
						<p className="paragraph font-spartan">{text}</p>
						<p className="source font-spartan md:justify-start  md:w-fit">
							<span>Source: </span>{" "}
							<a
								href={wiki_link}
								target="_blank"
							>
								<span>Wikipedia</span>
								<img
									src={icon}
									alt="icon"
								/>
							</a>
						</p>
					</div>
					<div className=" hidden min-w-[281px] h-[152px] md:flex flex-col gap-[16px]">
						<button
							onClick={() => changeSection("overview")}
							className={`w-full border border-white border-opacity-[0.2] h-[40px] font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.92] uppercase text-white text-left px-[20px]  transition-all ${
								section === "overview" ? bgStyle : "hover:bg-[#38384F]"
							}`}
						>
							<span className="font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.9px] text-white opacity-[0.5] mix-blend-normal pr-[17px] ">
								01
							</span>
							overview
						</button>
						<button
							onClick={() => changeSection("structures")}
							className={`w-full border border-white border-opacity-[0.2] h-[40px] font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.92] uppercase text-white text-left px-[20px]  transition-all  ${
								section === "structures" ? bgStyle : "hover:bg-[#38384F]"
							}`}
						>
							<span className="font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.9px] text-white opacity-[0.5] mix-blend-normal pr-[17px] ">
								02
							</span>
							internal structure
						</button>
						<button
							onClick={() => changeSection("surface")}
							className={`w-full border border-white border-opacity-[0.2] h-[40px] font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.92] uppercase text-white text-left px-[20px]  transition-all  ${
								section === "surface" ? bgStyle : "hover:bg-[#38384F]"
							}`}
						>
							<span className="font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.9px] text-white opacity-[0.5] mix-blend-normal pr-[17px] ">
								03
							</span>
							surface geology
						</button>
					</div>
				</div>

				<FooterData details={details} />
			</div>

			{/* Desktop */}
			<div className="hidden lg:block w-full px-[165px] pb-[56px] pt-[126px] ">
				<div className="flex justify-between">
					<div className="w-[540px] flex justify-center items-top">
						<div
							style={{
								height: desktopImageDimension,
								width: desktopImageDimension,
							}}
							className=" relative"
						>
							{section !== "structures" && (
								<img
									className="object-contain"
									src={images.planet}
									alt=""
								/>
							)}
							{section === "structures" && (
								<img
									className="object-contain"
									src={images.internal}
									alt=""
								/>
							)}
							{section === "surface" && (
								<img
									className={`absolute w-[120px] h-[120px] object-contain left-[50%] translate-x-[-50%] bottom-[-90px] lg:w-[163px] lg:h-[199px] ${
										page === "Jupiter" ||
										page === "Uranus" ||
										page === "Neptune"
											? "lg:bottom-[-25px]"
											: page === "Saturn"
											? "bottom-[90px]"
											: "lg:bottom-[-90px]"
									}`}
									src={images.geology}
									alt=""
								/>
							)}
						</div>
					</div>

					<div className="w-[350px] flex flex-col justify-center">
						<div className="">
							<h1 className="font-antonio text-[80px] leading-[104px] uppercase font-[400] text-white mb-[23px] ">
								{name}
							</h1>
							<p className="font-[400] text-[14px] leading-[25px] text-white font-spartan mb-[24px]">
								{text}
							</p>
							<p className="font-spartan text-[14px] leading-[25px] mix-blend-normal opacity-[0.5] font-[400] text-white justify-start mb-[28px] w-fit">
								<span>Source: </span>{" "}
								<a
									href={wiki_link}
									target="_blank"
									className="inline-flex underline"
								>
									<span>Wikipedia</span>
									<img
										className="object-contain ml-[10px]"
										src={icon}
										alt="icon"
									/>
								</a>
							</p>
						</div>
						<div className="gap-[16px] flex flex-col justify-between">
							<button
								onClick={() => changeSection("overview")}
								className={`w-full border border-white border-opacity-[0.2] h-[40px] font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.92] uppercase text-white text-left px-[20px]  transition-all ${
									section === "overview" ? bgStyle : "hover:bg-[#38384F]"
								}`}
							>
								<span className="font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.9px] text-white opacity-[0.5] mix-blend-normal pr-[17px] ">
									01
								</span>
								overview
							</button>
							<button
								onClick={() => changeSection("structures")}
								className={`w-full border border-white border-opacity-[0.2] h-[40px] font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.92] uppercase text-white text-left px-[20px]  transition-all  ${
									section === "structures" ? bgStyle : "hover:bg-[#38384F]"
								}`}
							>
								<span className="font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.9px] text-white opacity-[0.5] mix-blend-normal pr-[17px] ">
									02
								</span>
								internal structure
							</button>
							<button
								onClick={() => changeSection("surface")}
								className={`w-full border border-white border-opacity-[0.2] h-[40px] font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.92] uppercase text-white text-left px-[20px]  transition-all  ${
									section === "surface" ? bgStyle : "hover:bg-[#38384F]"
								}`}
							>
								<span className="font-spartan font-[700] text-[9px] leading-[25px] tracking-[1.9px] text-white opacity-[0.5] mix-blend-normal pr-[17px] ">
									03
								</span>
								surface geology
							</button>
						</div>
					</div>
				</div>
				<FooterData details={details} />
			</div>
		</>
	);
};

export default Hero;
