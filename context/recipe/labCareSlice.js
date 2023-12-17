import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import sauceSlice from "./sauceSlice";

const initialState = {
	isLoading: false,
	error: null,
	notification: null,
	variant: 'success',
	labCare: [],
	searchdata: [],
	labCareByid: {},
};

export const LabcareSlice = createSlice({
	name: "labCare",
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
		labcareSuccess(state, action) {
			state.isLoading = false;
			state.labCare = action.payload;
			state.error = null;
		},
		labcarebyidSuccess(state, action) {
			state.isLoading = false;
			state.labCareByid = action.payload;
			state.error = null;
		},
		searchSuccess(state, action) {
			state.isLoading = false;
			state.searchdata = action.payload;
			state.error = null;
		},
		createLabCareSuccess(state, action) {
			state.isLoading = false;
			state.labCare = action.payload;
			state.error = null;
		},
	},
	extraReducers: {}
});

export const {
	startLoading,
	hasError,
	labcareSuccess,
	createLabCareSuccess,
	stopLoading,
	labcarebyidSuccess,
	searchSuccess,
	saucebyidSuccess,
} = LabcareSlice.actions;



export const getallLabcare = (id) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/labcare/get/by/user/" + id, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log("response===========", response)
		if (response?.data?.status) {
			dispatch(labcareSuccess(response?.data));

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
export const getLabCareByDrinkID = (id, type) => async (dispatch) => {
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
				dispatch(labcarebyidSuccess(response?.data));
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

export const createLabCare = (data) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/labcare/add", data, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log(response, response.data?.status)

		if (response?.data?.status) {
			const username = JSON.parse(user).username
			dispatch(stopLoading())
			dispatch(createLabCareSuccess(response?.data))
			window.location.href = '/Profile'
		} else {
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
export default LabcareSlice.reducer;
