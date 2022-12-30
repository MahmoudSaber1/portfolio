import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Footer, Navbar } from "./components";
import { Home } from "./pages";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setColor, setMode } from "./store/PortfolioSlice/ThemeSlice";

const App = () => {
	const { color, mode } = useSelector((state) => state.theme);

	const dispatch = useDispatch();

	useEffect(() => {
		const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

		const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

		dispatch(setMode(themeClass));

		dispatch(setColor(colorClass));
	}, [dispatch]);

	return (
		<>
			<Box
				className={`layout ${mode} ${color}`}
				backgroundColor={`${"var(--second-bg)"}`}
			>
				<Navbar />
				<Home />
				<Footer />
			</Box>
		</>
	);
};

export default App;
