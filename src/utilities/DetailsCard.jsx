const DetailsCard = ({ parameter, detail }) => {
	return (
		<div className="border border-white border-opacity-[0.2] w-full h-[48px] px-[24px] flex justify-between items-center md:w-[164px] md:h-[88px] md:flex-col md:justify-center md:items-start md:px-[15px] md:pb-[19px] md:pt-[16px] lg:w-[255px] lg:h-[128px] lg:mt-[87px]">
			<p className="font-spartan font-[700] text-[8px] leading-[16px] tracking-[0.727] uppercase text-[#ffffff80] mix-blend-normal lg:font-[700] lg:text-[11px] lg:leading-[25px] lg:tracking-[1px] ">
				{parameter}
			</p>
			<h3 className="font-antonio font-[400] text-[20px] leading-[26px] text-right tracking-[-0.75px] text-white md:text-[24px] md:leading-[31px] md:tracking-[-0.9px] lg:text-[40px] lg:leading-[52px] lg:tracking-[-1.5px]  ">
				{detail}
			</h3>
		</div>
	);
};

export default DetailsCard;
