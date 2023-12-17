import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const initialState = {
	isLoading: false,
	error: null,
	notification: null,
	variant: 'success',
	recipe: [],
	allrecipe: [],
	recipebyid: {}
};

export const RecipeSlice = createSlice({
	name: "recipe",
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
		recipeSuccess(state, action) {
			state.isLoading = false;
			state.recipe = action.payload;
			state.error = null;
		},
		allrecipeSuccess(state, action) {
			state.isLoading = false;
			state.allrecipe = action.payload;
			state.error = null;
		},
		recipebyidSuccess(state, action) {
			state.isLoading = false;
			state.recipebyid = action.payload;
			state.error = null;
		},
		createRecipeSuccess(state, action) {
			state.isLoading = false;
			state.recipe = action.payload;
			state.error = null;
		},
	},
	extraReducers: {}
});

export const {
	startLoading,
	hasError,
	recipeSuccess,
	createRecipeSuccess,
	allrecipeSuccess,
	recipebyidSuccess,
	stopLoading,
} = RecipeSlice.actions;


export const getallRecipeByUserID = (id) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/api/recipe/get/by/user/" + id, {
			headers: {
				Authorization: accessToken,
			},
		});
		if (response?.data?.status) {
			dispatch(recipeSuccess(response?.data));
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
export const getRecipeByRecipeID = (id) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/recipe/get/" + id, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log("-----response", response)
		if (response?.data?.status) {
			dispatch(recipebyidSuccess(response?.data));
			// window.location.href = `/Recipe2/${id}`
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

export const getAllRecipe = () => async (dispatch) => {
	dispatch(startLoading())
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/recipe/get-all");
		if (response?.data?.status) {
			dispatch(allrecipeSuccess(response?.data?.result));
		} else {
			dispatch(hasError(response?.data))
		}
		return response;
	} catch (error) {
		dispatch(hasError(error))
	}
};

export const createRecipe = (data) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const postData = new FormData()
		postData.append('file', data.media)
		const uploadRes = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/file/upload", postData, {
			headers: {
				Authorization: accessToken,
				'Content-type': 'multipart/form-data',
			},
		});
		if (uploadRes?.data?.status) {
			data.media = uploadRes?.data?.result?.display_url
			const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/recipe/add", data, {
				headers: {
					Authorization: accessToken,
				},
			});
			console.log(response, response.data?.status)

			if (response?.data?.status) {
				const username = JSON.parse(user).username
				// enqueueSnackbar('Added sucessfully', { variant: "success" })
				dispatch(stopLoading())
				dispatch(createRecipeSuccess(response?.data))
				window.location.href = '/Profile'
			} else {
				// enqueueSnackbar(response?.data?.message, { variant: 'error' })
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


export const createRecipeNew = (data) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/recipe/add", data, {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log(response, response.data?.status)

		if (response?.data?.status) {
			const username = JSON.parse(user).username
			// enqueueSnackbar('Added sucessfully', { variant: "success" })
			dispatch(stopLoading())
			dispatch(createRecipeSuccess(response?.data))
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

export const createRecipeCategory = (data) => async (dispatch) => {
	dispatch(startLoading())
	try {
		const response = await axios.post("/admin/foodmenu/category/create", data);
		if (response.data.status) {
			dispatch(stopLoading())
			enqueueSnackbar(response?.data?.message, { variant: "success" })
			dispatch(getallRecipeByUserID())
		} else {
			dispatch(hasError(response.data))
			enqueueSnackbar(response?.data?.message, { variant: 'error' })
		}
		return response;
	} catch (error) {
		dispatch(hasError(error))
		return error;
	}
};

export default RecipeSlice.reducer;
