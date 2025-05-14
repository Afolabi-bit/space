import { createContext, useEffect, useState } from "react";

const AppContext = createContext({
	navIsActive: false,
	toggleNav: () => {},
	page: "",
	changePage: (page) => {},
	section: "",
	changeSection: (section) => {},
});

export function GlobalContextProvider({ children }) {
	const [navIsActive, setNavIsActive] = useState(false);
	const [page, setPage] = useState("Mercury");
	const [section, setSection] = useState("overview");

	function toggleNav(navIsActive) {
		setNavIsActive((prev) => !prev);
	}

	function changePage(page) {
		setPage(page);
	}

	function changeSection(section) {
		setSection(section);
	}

	return (
		<AppContext
			value={{
				navIsActive,
				toggleNav,
				page,
				changePage,
				section,
				changeSection,
			}}
		>
			{children}
		</AppContext>
	);
}

export default AppContext;
