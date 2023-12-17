import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const initialState = {
	isLoading: false,
	error: null,
	notification:null,
	variant: 'success',
	role: [],
	rolebyId : null
};

export const RoleSlice = createSlice({
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
		roleSuccess(state, action) {
			state.isLoading = false;
			state.role = action.payload;
			state.error = null;
		},
		roleByIdSuccess(state, action) {
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
	roleSuccess,
	roleByIdSuccess,
	stopLoading,
} = RoleSlice.actions;


export const getallRole = (data) => async (dispatch) => {
    dispatch(startLoading())
    try {
        const response = await axios.get("/role/get-all", data );
        if (response?.data?.status) {
			enqueueSnackbar(response?.data?.message, { variant: "success" })
			dispatch(roleSuccess(response?.data?.data));
		} else {
			dispatch(hasError(response?.data))
			enqueueSnackbar(response?.data?.message, { variant: 'error' })
		}
		return response;
    } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' })
        dispatch(loginFailed(error))
    }
};

export const getRoleById = (id) => async (dispatch) => {
    dispatch(startLoading())
    try {
        const response = await axios.get("/role/get/" + id );
        if (response?.data?.status) {
			enqueueSnackbar(response?.data?.message, { variant: "success" })
			dispatch(roleByIdSuccess(response?.data?.data));
		} else {
			dispatch(hasError(response?.data))
			enqueueSnackbar(response?.data?.message, { variant: 'error' })
		}
		return response;
    } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' })
        dispatch(loginFailed(error))
    }
};

export const addRole = (data) => async (dispatch) => {
	dispatch(startLoading())
	try {
		const response = await axios.post("/role/add", data);
		if (response?.data?.status) {
			dispatch(stopLoading())
			enqueueSnackbar(response?.data?.message, { variant: "success" })
			dispatch(getallRole())
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

export const updateRolebyId = (id) => async (dispatch) => {
	dispatch(startLoading())
	try {
		const response = await axios.post("/role/update/"+ id);
		if (response?.data?.status) {
			dispatch(stopLoading())
			enqueueSnackbar(response?.data?.message, { variant: "success" })
			dispatch(getallRole())
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

export const deletebyid = (id) => async (dispatch) => {
	dispatch(startLoading())
	try {
		const response = await axios.delete("/role/delete/" + id);
		if (response.data.status) {
			dispatch(stopLoading())
			enqueueSnackbar(response?.data?.message, { variant: "success" })
			dispatch(getallRole())
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

export default RoleSlice.reducer;
