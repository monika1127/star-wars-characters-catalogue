export const charactersSelector = (state) => state.characters.characters;
export const loadingSelector = (state) => state.characters.isLoading;
export const moreCharactersURLSelector = (state) =>
  state.characters.moreCharactersURL;
