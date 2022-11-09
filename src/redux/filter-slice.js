import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export default filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;
