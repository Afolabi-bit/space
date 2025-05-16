import { useContext } from "react";
import AppContext from "../store/GlobalContext";
import data from "../data/data.json";
import Hero from "../components/Hero";

const Page = () => {
	const { navIsActive, page, section } = useContext(AppContext);
	const pageData = data.find((data) => data.name === page);

	const {
		name,
		overview,
		structure,
		geology,
		rotation,
		revolution,
		radius,
		temperature,
		images,
	} = pageData;

	const paragraphText =
		section === "overview"
			? overview.content
			: section === "structures"
			? structure.content
			: geology.content;

	const url =
		section === "overview"
			? overview.source
			: section === "structures"
			? structure.source
			: geology.source;

	return (
		<section>
			{!navIsActive && (
				<Hero
					name={name}
					text={paragraphText}
					images={images}
					wiki_link={url}
					details={{ rotation, revolution, radius, temperature }}
				/>
			)}
		</section>
	);
};

export default Page;
