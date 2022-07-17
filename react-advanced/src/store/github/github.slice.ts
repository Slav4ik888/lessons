import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const LS_FAV_KEY = `RFK`;

interface GithubState {
  favourites: string[]
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? `[]`) as unknown as string[] || []
};


export const slice = createSlice({
  name: `github`,
  initialState,
  reducers: {
    addFavourite(state, { payload }: PayloadAction<string>) {
      state.favourites.push(payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    deleteFavourite(state, { payload }: PayloadAction<string>) {
      state.favourites = state.favourites.filter(f => f !== payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    }
  }
});

export const githubActions = slice.actions;
export const githubReducer = slice.reducer;
