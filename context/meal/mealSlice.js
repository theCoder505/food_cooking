import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const initialState = {
	isLoading: false,
	error: null,
	notification:null,
	variant: 'success',
	meal: [],
	mealbyId : null,
};

export const MealSlice = createSlice({
	name: "role",
	initialState,
	reducers: {
		startLoading(state) {
			state.isLoading = true;
		},
		hasError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
			state.notification = action.payload;
			state.variant = 'error';
		},
		stopLoading(state) {
			state.isLoading = false;
		},
		mealSuccess(state, action) {
			state.isLoading = false;
			state.role = action.payload;
			state.error = null;
		},
		mealByIdSuccess(state, action) {
			state.isLoading = false;
			state.rolebyId = action.payload;
			state.error = null;
		},
	},
	extraReducers: {}
});

export const {
	startLoading,
	hasError,
	mealSuccess,
	mealByIdSuccess,
	stopLoading,
} = MealSlice.actions;

export const addMeal = (data) => async (dispatch) => {
	const accessToken = localStorage.getItem("accessToken")
	dispatch(startLoading())
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/meal/add", data, {
			headers: {
				Authorization: accessToken,
			},
		});
		if (response?.data?.status) {
			dispatch(stopLoading())
			enqueueSnackbar(response?.data?.message, { variant: "success" })
			dispatch(mealSuccess(response?.data))
			window.location.href = '/Profile'
		} else {
			dispatch(hasError(response?.data))
			enqueueSnackbar(response?.data?.message, { variant: 'error' })
		}
		return response;
	} catch (error) {
		dispatch(hasError(error))
		return error;
	}
};

export default MealSlice.reducer;
