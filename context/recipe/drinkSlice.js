import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import sauceSlice from "./sauceSlice";

const initialState = {
	isLoading: false,
	error: null,
	notification: null,
	variant: 'success',
	drinks: [],
	searchdata: [],
	drinkbyid: {},
	saucebyid: {},
};

export const DrinkSlice = createSlice({
	name: "drinks",
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
		drinkSuccess(state, action) {
			state.isLoading = false;
			state.drinks = action.payload;
			state.error = null;
		},
		drinkbyidSuccess(state, action) {
			state.isLoading = false;
			state.drinkbyid = action.payload;
			state.error = null;
		},
		searchSuccess(state, action) {
			state.isLoading = false;
			state.searchdata = action.payload;
			state.error = null;
		},
		createDrinksSuccess(state, action) {
			state.isLoading = false;
			state.drinks = action.payload;
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
	stopLoading,
	drinkbyidSuccess,
	searchSuccess,
	saucebyidSuccess,
} = DrinkSlice.actions;



export const getallDrinks = (id) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/drink/get/by/user/" + id, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log("response===========", response)
		if (response?.data?.status) {
			dispatch(drinkSuccess(response?.data));

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
export const getDrinkByDrinkID = (id, type) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/item/get/" + type + "/" + id, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log("-----response", response)
		if (response?.data?.status) {
			if (saucebyidSuccess !== null) {
				dispatch(drinkbyidSuccess(response?.data));
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
// export const createDrinks = (data) => async (dispatch) => {
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
// 			const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/drink/add", data, {
// 				headers: {
// 					Authorization: accessToken,
// 				},
// 			});
// 			console.log(response,response.data?.status)

// 			if (response?.data?.status) {
// 				const username = JSON.parse(user).username
// 				dispatch(stopLoading())
// 				dispatch(createDrinksSuccess(response?.data))
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
export const createDrinks = (data) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/drink/add", data, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log(response, response.data?.status)

		if (response?.data?.status) {
			const username = JSON.parse(user).username
			// enqueueSnackbar('Added sucessfully', { variant: "success" })
			dispatch(stopLoading())
			dispatch(createDrinksSuccess(response?.data))
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

export const getRecipeSearchByCategoryId = (data) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/api/search", data, {
			headers: {
				Authorization: accessToken,
			},
		});

		if (response?.data?.status) {
			// enqueueSnackbar('Added sucessfully', { variant: "success" })
			dispatch(stopLoading())
			dispatch(searchSuccess(response?.data))
			// window.location.href = '/Profile'
		} else {
			// enqueueSnackbar(response?.data?.message, { variant: 'error' })
			dispatch(searchSuccess([]))
		}
		return response;
	} catch (error) {
		return error;
	}
};
export default DrinkSlice.reducer;
