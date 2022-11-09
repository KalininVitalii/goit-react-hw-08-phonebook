import { fetchUsers, deleteUser, addUser, updateUser } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '', isLoading: false, error: null },
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
    },
    [addUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [updateUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items[index] = payload;
      state.isLoading = false;
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
