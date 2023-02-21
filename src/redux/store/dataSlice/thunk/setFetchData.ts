import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICountries } from "../../../../intarfaces/intarfaces";
import { setData } from "../dataSlice";
import { ResponseType } from "../../../../intarfaces/intarfaces";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (url: string, { dispatch }) => {
    const { data } = await axios.get<ResponseType>(url);
    dispatch(setData(data.Countries));
  }
);
