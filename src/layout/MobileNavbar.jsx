import mercuryOval from "../../public/assets/Mercury-oval.png";
import earthOval from "../../public/assets/earth-oval.png";
import marsOval from "../../public/assets/mars-oval.png";
import venusOval from "../../public/assets/venus-oval.png";
import jupiterOval from "../../public/assets/jupiter-oval.png";
import saturnOval from "../../public/assets/saturn-oval.png";
import uranusOval from "../../public/assets/uranus-oval.png";
import neptuneOval from "../../public/assets/neptune-oval.png";
import chevronIcon from "../../public/assets/icon-chevron.svg";
import Border from "../utilities/Border";
import { useContext } from "react";
import AppContext from "../store/GlobalContext";

const btnsData = [
	{
		img: mercuryOval,
		name: "Mercury",
	},
	{
		img: earthOval,
		name: "Earth",
	},
	{
		img: marsOval,
		name: "Mars",
	},
	{
		img: venusOval,
		name: "Venus",
	},
	{
		img: jupiterOval,
		name: "Jupiter",
	},
	{
		img: saturnOval,
		name: "Saturn",
	},
	{
		img: uranusOval,
		name: "Uranus",
	},
	{
		img: neptuneOval,
		name: "Neptune",
	},
];

function NavBtn({ img, name, chevron, hasBottomBorder }) {
	const { toggleNav, changePage, changeSection } = useContext(AppContext);
	return (
		<button
			onClick={() => {
				changePage(name);
				toggleNav();
				changeSection("overview");
			}}
			className="w-full "
		>
			<div className="flex items-center justify-between py-[20px]">
				<p className="flex items-start h-[20px] ">
					<img
						className="object-contain w-[20px] h-full"
						src={img}
						alt="oval icon"
					/>
					<span className="text-white  self-start uppercase font-spartan text-[15px] leading-[25px] tracking-[1.36px] ml-[24px] font-[700]">
						{name}
					</span>
				</p>
				<img
					className="object-contain  w-[8px] h-[8px]"
					src={chevron}
					alt="right arrow icon"
				/>
			</div>
			{hasBottomBorder && <Border />}
		</button>
	);
}

const MobileNavbar = () => {
	const { navIsActive } = useContext(AppContext);
	return (
		<nav
			id="nav"
			className={`w-full bg-navyBg absolute px-[24px] pb-[40px] left-0 top-[73px] md:hidden ${
				navIsActive ? "active" : ""
			}
			`}
		>
			<div className="w-[327px] h-[487px]">
				{btnsData.map((btn, index) => {
					if (index < btnsData.length - 1) {
						return (
							<NavBtn
								key={index}
								img={btn.img}
								name={btn.name}
								chevron={chevronIcon}
								hasBottomBorder={true}
							/>
						);
					}
					return (
						<NavBtn
							key={index}
							img={btn.img}
							name={btn.name}
							chevron={chevronIcon}
						/>
					);
				})}
			</div>
		</nav>
	);
};

export default MobileNavbar;
