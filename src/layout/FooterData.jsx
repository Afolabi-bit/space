import DetailsCard from "../utilities/DetailsCard";

const FooterData = ({ details }) => {
	return (
		<div className="w-full  flex flex-col gap-[8px] md:flex-row md:justify-between">
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
	);
};

export default FooterData;
