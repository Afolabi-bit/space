const DetailsCard = ({ parameter, detail }) => {
	return (
		<div className="border border-white border-opacity-[0.4] w-full h-[48px] px-[24px] flex justify-between items-center">
			<p className="font-spartan font-[700] text-[8px] leading-[16px] tracking-[0.727] uppercase text-[#ffffff80] mix-blend-normal ">
				{parameter}
			</p>
			<h3 className="font-antonio font-[400] text-[20px] leading-[26px] text-right tracking-[-0.75px] text-white">
				{detail}
			</h3>
		</div>
	);
};

export default DetailsCard;
