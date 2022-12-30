import { configureStore } from "@reduxjs/toolkit";
import theme from "./PortfolioSlice/ThemeSlice";

export default configureStore({
	reducer: {
		theme,
	},
});
