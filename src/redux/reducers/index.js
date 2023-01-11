import { createSlice } from "@reduxjs/toolkit";

const toolSlice = createSlice({
  name: "toolkit",
  initialState: {
    requests: [
      {
        key: "1",
        requestNumber: "#1",
        coordinatesFromLat: 59.84660399,
        coordinatesFromLng: 30.29496392,
        coordinatesToLat: 59.82934196,
        coordinatesToLng: 30.42423701,
      },
      {
        key: "2",
        requestNumber: "#2",
        coordinatesFromLat: 59.82934196,
        coordinatesFromLng: 30.42423701,
        coordinatesToLat: 59.82761295,
        coordinatesToLng: 30.41705607,
      },
      {
        key: "3",
        requestNumber: "#3",
        coordinatesFromLat: 59.83567701,
        coordinatesFromLng: 30.38064206,
        coordinatesToLat: 59.84660399,
        coordinatesToLng: 30.29496392,
      },
      {
        key: "4",
        requestNumber: "#4",
        coordinatesFromLat: 59.34660399,
        coordinatesFromLng: 30.29496392,
        coordinatesToLat: 59.82761295,
        coordinatesToLng: 30.41705607,
      },
      {
        key: "5",
        requestNumber: "#5",
        coordinatesFromLat: 59.83567701,
        coordinatesFromLng: 30.38064206,
        coordinatesToLat: 59.84660399,
        coordinatesToLng: 30.29496392,
      },
    ],
    coordinatesRequest: {
      key: "",
      requestNumber: "",
      coordinatesFromLat:"",
      coordinatesFromLng: "",
      coordinatesToLat: "",
      coordinatesToLng: "",
    },
  },
  reducers: {
    buferRequest(state, action) {
      debugger
      for (let i = 0; i < state.requests.length; i++) {
        if (state.requests[i].key === action.payload) {
          state.coordinatesRequest = state.requests[i];
          break;
        }
      }
    },
  },
});

export default toolSlice.reducer;
export const { buferRequest } = toolSlice.actions;
