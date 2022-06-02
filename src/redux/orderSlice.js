import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrders = async (dispatch, id) => {
  dispatch(ordersLoading());

  try {
    const res = await axios.get(`api/order/${id}`);

    dispatch(getOrdersNow(res.data));
  } catch (error) {
    console.log("get order error");
  }
};

export const checkout = async (dispatch, { id, source }) => {
  try {
    const res = await axios.post(`/api/order/${id}`, { source });

    dispatch(checkoutNow(res.data));
  } catch (error) {}
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
  },
  reducers: {
    ordersLoading: (state, action) => {
      state.isLoading = true;
    },
    getOrdersNow: (state, action) => {},
    checkoutNow: (state, action) => {},
  },
});

export const { ordersLoading, getOrdersNow, checkoutNow } = orderSlice.actions;
export default orderSlice.reducer;
