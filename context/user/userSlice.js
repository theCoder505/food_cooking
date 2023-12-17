import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const initialState = {
	isLoading: false,
	error: null,
	notification: null,
	variant: 'success',
	user: [],
	userList: [],
	userFollowinglist :[],
	image_upload_url: null,
	userById : []
};

export const UserSlice = createSlice({
	name: "user",
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
		userProfileSuccess(state, action) {
			state.isLoading = false;
			state.user = action.payload;
			state.error = null;
		},
		userProfileByIDSuccess(state, action) {
			state.isLoading = false;
			state.userById = action.payload;
			state.error = null;
		},
		userProfileUpdateSuccess(state, action) {
			state.isLoading = false;
			state.user = action.payload;
			state.error = null;
		},
		userListSuccess(state, action) {
			state.isLoading = false;
			state.userList = action.payload;
			state.error = null;
		},
		userFollowersListSuccess(state, action) {
			state.isLoading = false;
			state.userFollowinglist = action.payload;
			state.error = null;
		},
		userFollowSuccess(state, action) {
			state.isLoading = false;
			state.user = action.payload;
			state.error = null;
		},
		userImageChangeSuccess(state, action) {
			state.isLoading = false;
			state.userList = action.payload;
			state.error = null;
		},
		imageUploadSuccess(state, action) {
			state.isLoading = false;
			state.image_upload_url = action.payload;
			state.error = null;
		},
	},
	extraReducers: {}
});

export const {
	startLoading,
	hasError,
	userProfileSuccess,
	userProfileUpdateSuccess,
	userFollowersListSuccess,
	stopLoading,
	userListSuccess,
	userFollowSuccess,
	userImageChangeSuccess,
	imageUploadSuccess,
	userProfileByIDSuccess
} = UserSlice.actions;


export const getUserProfile = (userName) => async (dispatch) => {
	dispatch(startLoading())
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/user/profile/" + userName);
		if (response?.data?.status) {
			// enqueueSnackbar(response?.data?.message, { variant: "success" })
			dispatch(userProfileSuccess(response?.data?.result));
		} else {
			dispatch(hasError(response?.data))
			// enqueueSnackbar(response?.data?.message, { variant: 'error' })
		}
		return response;
	} catch (error) {
		// enqueueSnackbar(error.message, { variant: 'error' })
	}
};
export const getUserProfileByID = (id) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/api/user/get/by/user/" + id , {
			headers: {
				Authorization: accessToken,
			},
		});
		console.log("response",response)
		if (response?.data?.status) {
			// enqueueSnackbar(response?.data?.message, { variant: "success" })
			dispatch(userProfileByIDSuccess(response?.data?.data));
		} else {
			dispatch(hasError(response?.data))
			// enqueueSnackbar(response?.data?.message, { variant: 'error' })
		}
		return response;
	} catch (error) {
		// enqueueSnackbar(error.message, { variant: 'error' })
	}
};

export const updateUserProfile = (id, data) => async (dispatch) => {
	dispatch(startLoading())

	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.put(process.env.NEXT_PUBLIC_AUTH_URL + "/user/profile/update/" + id, data, {
			headers: {
				Authorization: accessToken,
			},
		});
		if (response?.data?.status) {
			dispatch(getUserProfile(user?.username))

			dispatch(userProfileUpdateSuccess(response?.data?.result));
		} else {
			dispatch(hasError(response?.data))
		}
		return response;
	} catch (error) {
	}
};

export const getAllUserList = () => async (dispatch) => {
	dispatch(startLoading())
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/get/all/user/list");
		if (response?.data?.status) {
			dispatch(userListSuccess(response?.data?.result));
		} else {
			dispatch(hasError(response?.data))
		}
		return response;
	} catch (error) {
	}
};

export const userFollow = (id) => async (dispatch) => {
	dispatch(startLoading())

	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/user/follow", id, {
			headers: {
				Authorization: accessToken,
			},
		});
		if (response?.data?.status) {
			const userName = JSON.parse(user).username
			// dispatch(userFollowSuccess(userName))
			dispatch(getUserProfile(userName));
			dispatch(getAllUserList())
			dispatch(getUserFolloweingList())
		} else {
			dispatch(hasError(response?.data))
		}
		return response;
	} catch (error) {
		console.log(error)
	}
};

export const userImageChange = (data) => async (dispatch) => {
	dispatch(startLoading())

	console.log(data, "------")
	const accessToken = localStorage.getItem("accessToken")
	const user = localStorage.getItem("user")
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/file/upload", data, {
			headers: {
				Authorization: accessToken,
				'Content-type': 'multipart/form-data',
			},
		});
		console.log(response.data?.status)
		if (response?.data?.status) {
			// dispatch(userImageChangeSuccess(user?.username))
			dispatch(updateUserProfile(data.id, {
				id: data.id,
				profile: response?.data?.result?.display_url
			}));
			const username = JSON.parse(user).username
			dispatch(getUserProfile(username))
		} else {
			dispatch(hasError(response?.data))
		}
		return response;
	} catch (error) {
		console.log(error)
	}
};

export const getUserFolloweingList = () => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_AUTH_URL + "/user/following/list", {
			headers: {
				Authorization: accessToken,
			},
		});
		if (response?.data?.status) {
			dispatch(userFollowersListSuccess(response?.data?.result));
			return response?.data?.result;
		} else {
			dispatch(hasError(response?.data))
		}
		return response;
	} catch (error) {
		console.log(error)
		return error;
	}
};

export const imageUpload = (data) => async (dispatch) => {
	dispatch(startLoading())
	const accessToken = localStorage.getItem("accessToken")
	console.log(data,"data")
	try {
		const response = await axios.post(process.env.NEXT_PUBLIC_AUTH_URL + "/file/upload", data, {
			headers: {
				Authorization: accessToken,
				'Content-type': 'multipart/form-data',
			},
		});
		console.log(response?.data, "response")
		if (response?.data?.status) {
			dispatch(imageUploadSuccess(response?.data?.result))
		} else {
			dispatch(hasError(response?.data))
		}
		return response;
	} catch (error) {
		console.error(error)
	}
};

export default UserSlice.reducer;
