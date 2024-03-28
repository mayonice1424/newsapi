import { createSlice } from "@reduxjs/toolkit";

type NavbarState = {
  activeSearch: string;
};

const initialState: NavbarState = {
  activeSearch: "", 
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setActiveSearch: (state, action) => {
      state.activeSearch = action.payload;
    },
  },
});

export const { setActiveSearch } = navbarSlice.actions;

export default navbarSlice.reducer;
