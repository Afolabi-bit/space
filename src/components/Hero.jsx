import { useContext } from "react";
import icon from "../assets/icon-source.svg";
import DetailsCard from "../utilities/DetailsCard";
import AppContext from "../store/GlobalContext";

const Hero = ({ images, name, text, wiki_link, details }) => {
	const { section, page } = useContext(AppContext);
	console.log(page);
	return (
		<div className="hero md:hidden">
			<div className="img-wrapper">
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

			<div className="text">
				<h1>{name}</h1>
				<p className="paragraph font-spartan">{text}</p>
				<p className="source font-spartan">
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

			<div className="w-full flex flex-col gap-[8px]">
				<DetailsCard
					parameter={"rotation time"}
					detail={details.rotation}
				/>
				<DetailsCard
					parameter={"revolution time"}
					detail={details.revolution}
				/>
				<DetailsCard
					parameter={"radius"}
					detail={details.radius}
				/>
				<DetailsCard
					parameter={"average temp."}
					detail={details.temperature}
				/>
			</div>
		</div>
	);
};

export default Hero;
