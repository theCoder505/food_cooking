import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const initialState = {
	isLoading: false,
	error: null,
	notification: null,
	variant: 'success',
	seasoning: [],
	seasoningById :{}
};

export const SeasoningSlice = createSlice({
	name: "seasoning",
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
		seasoningSuccess(state, action) {
			state.isLoading = false;
			state.seasoning = action.payload;
			state.error = null;
		},
		createSeasoningSuccess(state, action) {
			state.isLoading = false;
			state.seasoning = action.payload;
			state.error = null;
		},
		seasoningByidSuccess(state, action) {
			state.isLoading = false;
			state.seasoningById = action.payload;
			state.error = null;
		},
	},
	extraReducers: {}
});

export const {
	startLoading,
	hasError,
	drinkSuccess,
	createDrinksSuccess,
	seasoningSuccess,
	createSeasoningSuccess,
	stopLoading,
	seasoningByidSuccess
} = SeasoningSlice.actions;


export const getallSeasoning = (id) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/seasoning/get/by/user/" + id, {
			headers: {
				Authorization: accessToken,
			},
		});
		if (response?.data?.status) {
			dispatch(seasoningSuccess(response?.data));
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

// export const createSeasoning = (data) => async (dispatch) => {
// 	dispatch(startLoading())
// 	const accessToken = localStorage.getItem("accessToken")
// 	const user = localStorage.getItem("user")
// 	try {
// 		const postData = new FormData()
// 		postData.append('file', data.media)
// 		console.log("postData" ,postData)
// 		const uploadRes = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/file/upload", postData, {
// 			headers: {
// 				Authorization: accessToken,
// 				'Content-type': 'multipart/form-data',
// 			},
// 		});
// 		if (uploadRes?.data?.status) {
// 			data.media = uploadRes?.data?.result?.display_url
// 			const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/seasoning/add", data, {
// 				headers: {
// 					Authorization: accessToken,
// 				},
// 			});
// 			console.log(response,response.data?.status)

// 			if (response?.data?.status) {
// 				const username = JSON.parse(user).username
// 				dispatch(stopLoading())
// 				dispatch(createSeasoningSuccess(response?.data))
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

export const createSeasoning = (data) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/seasoning/add", data, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log(response, response.data?.status)

		if (response?.data?.status) {
			const username = JSON.parse(user).username
			// enqueueSnackbar('Added sucessfully', { variant: "success" })
			dispatch(stopLoading())
			dispatch(createSeasoningSuccess(response?.data))
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

export const getSeasoningByID = (id,type) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/item/get/"+ type + "/"+ id, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log("-----response", response)
		if (response?.data?.status) {
			if (saucebyidSuccess !== null) {
				dispatch(seasoningByidSuccess(response?.data));
				return response;
			} else {
				dispatch(hasError(response?.data))
			}
			return response;
			// window.location.href = `/Recipe2/${id}`
		// } else if (response?.data?.status) {
			// dispatch(saucebyidSuccess(response?.data));
			// return response;
		// }else{	
		}
		
	} catch (error) {
		// enqueueSnackbar(error.message, { variant: 'error' })
		// dispatch(hasError(response?.data))
	}
};

export default SeasoningSlice.reducer;
