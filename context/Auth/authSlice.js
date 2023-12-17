import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
// import { AppDispatch } from "../Store";
// import axios from "../../utils/axios";
// import { VariantType, enqueueSnackbar } from "notistack";
// import { IApiResponse } from "../../types/api/api";
// import { IInventoryCategory } from "../../types/inventory";
// import { IFoodManuCategory } from "../../types/foodmanu";

const initialState = {
	isLoading: false,
	error: null,
	notification:null,
	variant: 'success',
	user: null ,
};

export const AuthSlice = createSlice({
	name: "Auth",
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
		loginSuccess(state, action) {
			state.isLoading = false;
			state.user = action.payload;
			state.error = null;
		},
		registerSuccess(state, action) {
			state.isLoading = false;
			state.user = action.payload;
			state.error = null;
		}
	},
	extraReducers: {}
});

export const {
	startLoading,
	hasError,
	loginSuccess,
	registerSuccess
} = AuthSlice.actions;



export const login = (data) => async (dispatch) => {
    dispatch(startLoading())
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/user/login", data );
		if (response?.data?.status) {
			localStorage.setItem("accessToken", response?.data?.result?.accesstoken);
			localStorage.setItem("user", JSON.stringify(response?.data?.result?.user));
			dispatch(loginSuccess(response?.data?.data));
			dispatch(hasError(response.data))
		return response;
        } else {
			dispatch(hasError(response?.data))
			return response;
		}
		return response;
    } catch (error) {
		// dispatch(loginFailed(error))
		return error;
    }
};

export const logout = () => async (dispatch) => {
	localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
};

export const register = (data) => async (dispatch) => {
    dispatch(startLoading())
    try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/user/register", data );
		if (response?.data?.status) {
			localStorage.setItem("accessToken", response?.data?.result?.token);
			localStorage.setItem("user", JSON.stringify(response?.data?.result));
			dispatch(registerSuccess(response?.data?.data));
			window.location.href = '/'
		return response;
        } else {
			dispatch(hasError(response?.data))
			return response;
		}
    } catch (error) {
        // dispatch(registerFailed(error))
    }
};


export default AuthSlice.reducer;
