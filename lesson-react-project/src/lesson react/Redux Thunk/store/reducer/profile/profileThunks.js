import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProfilesRedux = createAsyncThunk(
  "profiles/getAllprofiles",
  async (_,thunkApi) => {
    try {
      const { data } = await axios.get("http://localhost:3000/profile");

      return data; //! bu artiq bizim action.payloadimdi
    } catch (error) {
      return thunkApi.rejectWithValue(
        "Mehsullarin Datasina ulasdigim anda xeta bas verdi"
      )
    }
  }
);
export const getPostNameReducer = createAsyncThunk(
  "profiles/getPostNameReducer",
  async (name,thunkApi) => {
    try {
      const { data } = await axios.post("http://localhost:3000/profile",{
        name,});

      return data; //! bu artiq bizim action.payloadimdi
    } catch (error) {
      return thunkApi.rejectWithValue(
        "Mehsullarin Datasina ulasdigim anda xeta bas verdi"
      )
    }
  }
);
