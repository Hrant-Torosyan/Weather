import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../axiosClient";
import { TransformWeatherData } from "../../util/TransformWeatherData";
const apiKey = import.meta.env.VITE_API_KEY;

const initialState = {
	error: null,
	status: "idle",
	currentWeather: null,
	errorModal: "close",
	listOfWeather: null,
	selectedDay: new Date().toISOString().split("T")[0],
	unit: localStorage.getItem("unit") || "metric",
};

export const getWeatherData = createAsyncThunk(
	"weather/data",
	async ({ city, latitude, longitude, type }, { rejectWithValue }) => {
		try {
			const currentWeatherResponse =
				type === "LOCATION"
					? await axiosClient.get(
							`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
					  )
					: await axiosClient.get(`data/2.5/weather?q=${city}&appid=${apiKey}`);

			const forecastResponse =
				type === "LOCATION"
					? await axiosClient.get(
							`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
					  )
					: await axiosClient.get(`data/2.5/forecast?q=${city}&appid=${apiKey}`);

			return {
				currentWeather: currentWeatherResponse.data,
				forecast: TransformWeatherData(forecastResponse.data.list),
			};
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		getWeatherDataSucceeded: (state) => {
			state.status = "idle";
		},
		setSelectedDay: (state, action) => {
			state.selectedDay = action.payload;
		},
		toggleUnit: (state) => {
			state.unit = state.unit === "metric" ? "imperial" : "metric";
			localStorage.setItem("unit", state.unit);
		},
		openErrorModal: (state) => {
			state.errorModal = "open";
		},
		closeErrorModal: (state) => {
			state.errorModal = "close";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getWeatherData.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.currentWeather = action.payload.currentWeather;
				state.listOfWeather = action.payload.forecast;
				state.error = null;
			})
			.addCase(getWeatherData.pending, (state) => {
				state.status = "pending";
			})
			.addCase(getWeatherData.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const {
	setSelectedDay,
	toggleUnit,
	getWeatherDataSucceeded,
	openErrorModal,
	closeErrorModal,
} = weatherSlice.actions;
export default weatherSlice.reducer;
