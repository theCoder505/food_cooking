import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const initialState = {
	isLoading: false,
	error: null,
	notification: null,
	variant: 'success',
	sauce : []
};

export const SauceSlice = createSlice({
	name: "sauce",
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
		sauceSuccess(state, action) {
			state.isLoading = false;
			state.sauce = action.payload;
			state.error = null;
		},
		createSauceSuccess(state, action) {
			state.isLoading = false;
			state.sauce = action.payload;
			state.error = null;
		},
	},
	extraReducers: {}
});

export const {
	startLoading,
	hasError,
	sauceSuccess,
	createSauceSuccess,
	stopLoading,
} = SauceSlice.actions;


export const getallSauce = (id) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/sauce/get/by/user/" + id, {
			headers: {
				Authorization: accessToken,
			},
		});
		if (response?.data?.status) {
			dispatch(sauceSuccess(response?.data));
			return response;
		} else {
			dispatch(hasError(response?.data))
		}
		return response;
	} catch (error) {
		// enqueueSnackbar(error.message, { variant: 'error' })
		// dispatch(hasError(response?.data))
	}
};

// export const createSauce = (data) => async (dispatch) => {
// 	dispatch(startLoading())
// 	const accessToken = localStorage.getItem("accessToken")
// 	const user = localStorage.getItem("user")
// 	try {
// 		const postData = new FormData()
// 		postData.append('file', data.media)
// 		console.log("postData" ,data.media, postData)
// 		const uploadRes = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/file/upload", postData, {
// 			headers: {
// 				Authorization: accessToken,
// 				'Content-type': 'multipart/form-data',
// 			},
// 		});
// 		if (uploadRes?.data?.status) {
// 			data.media = uploadRes?.data?.result?.display_url
// 			const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/sauce/add", data, {
// 				headers: {
// 					Authorization: accessToken,
// 				},
// 			});
// 			console.log(response,response.data?.status)

// 			if (response?.data?.status) {
// 				const username = JSON.parse(user).username
// 				dispatch(stopLoading())
// 				dispatch(createSauceSuccess(response?.data))
// 				window.location.href = '/Profile'
// 			} else {
// 				dispatch(hasError(response.data))
// 			}
// 			return response;
// 		} else {
// 			dispatch(hasError(uploadRes?.data))
// 		}

// 		return uploadRes;
// 	} catch (error) {
// 		console.log(error)
// 		return error;
// 	}
// };
export const createSauce = (data) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/sauce/add", data, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log(response, response.data?.status)

		if (response?.data?.status) {
			const username = JSON.parse(user).username
			// enqueueSnackbar('Added sucessfully', { variant: "success" })
			dispatch(stopLoading())
			dispatch(createSauceSuccess(response?.data))
			window.location.href = '/Profile'
		} else {
			// enqueueSnackbar(response?.data?.message, { variant: 'error' })
			dispatch(hasError(response.data))
		}
		return response;
	} catch (error) {
		console.log(error)
		return error;
	}
};

export default SauceSlice.reducer;
