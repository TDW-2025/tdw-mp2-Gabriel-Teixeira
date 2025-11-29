import { createSlice } from '@reduxjs/toolkit';

interface VotingState {
  digimonVotes: number;
  pokemonVotes: number;
}

const loadInitialState = (): VotingState => {
  try {
    const serializedState = localStorage.getItem('appVotes');
    if (serializedState === null) {
      return { digimonVotes: 0, pokemonVotes: 0 };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load votes from localStorage", e);
    return { digimonVotes: 0, pokemonVotes: 0 };
  }
};

const initialState: VotingState = loadInitialState();

const saveState = (state: VotingState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('appVotes', serializedState);
  } catch (e) {
    console.error("Could not save votes to localStorage", e);
  }
};

const votingSlice = createSlice({
  name: 'voting',
  initialState,
  reducers: {
    voteForDigimon: (state) => {
      state.digimonVotes += 1;
      saveState(state); 
    },
    voteForPokemon: (state) => {
      state.pokemonVotes += 1;
      saveState(state); 
    },
  },
});

export const { voteForDigimon, voteForPokemon } = votingSlice.actions;
export default votingSlice.reducer;