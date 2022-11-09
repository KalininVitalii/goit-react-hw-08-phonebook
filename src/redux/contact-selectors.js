import { createSelector } from '@reduxjs/toolkit';

export const selectedContacts = state => state.contacts.items;
export const selectIsLoading = state => state.users.isLoading;
export const selectedFilter = state => state.filter.filter;
export const selectVisibleContacts = createSelector(
  [selectedContacts, selectedFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter))
);
