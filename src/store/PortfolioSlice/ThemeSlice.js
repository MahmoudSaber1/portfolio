import { createSlice } from "@reduxjs/toolkit";

// Init Slice
const initialState = {
	color: "",
	mode: "",
};

const ThemeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setColor: (state, action) => {
			state.color = action.payload;
		},
		setMode: (state, action) => {
			state.mode = action.payload;
		},
	},
});

export const { setColor, setMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;
