import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUsers',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`, {
        headers: {
          authorization: 'admin',
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUsers',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users', user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUsers',
  async ({ id, name, phone }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        phone,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
