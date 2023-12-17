import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const initialState = {
	isLoading: false,
	error: null,
	notification: null,
	variant: 'success',
	feed: [],
};

export const FeedSlice = createSlice({
	name: "feed",
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
		feedSuccess(state, action) {
			state.isLoading = false;
			state.feed = action.payload;
			state.error = null;
		},
		createDrinksSuccess(state, action) {
			state.isLoading = false;
			state.feed = action.payload;
			state.error = null;
		},
	},
	extraReducers: {}
});

export const {
	startLoading,
	hasError,
	feedSuccess,
	createDrinksSuccess,
	stopLoading,
} = FeedSlice.actions;


export const getAllFeed = () => async (dispatch) => {
	dispatch(startLoading())
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL +"/feed/get-all");
		if (response?.data?.status) {
			dispatch(feedSuccess(response?.data?.result));
		} else {
			dispatch(hasError(response?.data))
		}
		return response;
	} catch (error) {
		dispatch(hasError(error))
	}
};

export const createFeed = (data) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const postData = new FormData()
		postData.append('file', data.media)
		console.log("postData" ,postData)
		const uploadRes = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/file/upload", postData, {
			headers: {
				Authorization: accessToken,
				'Content-type': 'multipart/form-data',
			},
		});
		if (uploadRes?.data?.status) {
			data.media = uploadRes?.data?.result?.display_url
			const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/feed/add", data, {
				headers: {
					Authorization: accessToken,
				},
			});
			if (response?.data?.status) {
				const username = JSON.parse(user).username
				dispatch(stopLoading())
				dispatch(createDrinksSuccess(response?.data))
				window.location.href = '/Profile'
			} else {
				dispatch(hasError(response.data))
			}
			return response;
		} else {
			dispatch(hasError(uploadRes?.data))
		}

		return uploadRes;
	} catch (error) {
		console.log(error)
		return error;
	}
};


export default FeedSlice.reducer;
