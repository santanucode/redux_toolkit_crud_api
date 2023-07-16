import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";

import { createUser, getAllUsers } from "./user.request";

// Declare and initiate initial state
export const initialState: any = {
  loading_users: false,
  sucess_users: false,
  error_users: false,
  loading_create_user: false,
  sucess_create_user: false,
  error_create_user: false,
  userList: []
};

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    return getAllUsers()
      .then((response: any) => {
        console.log(">>>", response);
        return response?.data;
      })
      .catch((error: any) => {
        console.log("Errrror asila");
        throw error.response.data;
      });
  }
);

export const fetchCreateUser = createAsyncThunk(
  "users/fetchCreateUser",
  async (body: any) => {
    return createUser(body)
      .then((response: any) => {
        return response?.data;
      })
      .catch((error: any) => {
        throw error.response.data;
      });
  }
);

// create slice

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: () => initialState // resetting the state
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.loading_users = true;
      state.sucess_users = false;
      state.error_users = false;
    });
    builder.addCase(fetchAllUsers.rejected, (state) => {
      state.loading_users = false;
      state.sucess_users = false;
      state.error_users = true;
    });
    builder.addCase(
      fetchAllUsers.fulfilled,
      (state, action: PayloadAction<AnyAction>) => {
        state.loading_users = false;
        state.sucess_users = true;
        state.error_users = false;
        state.userList = action.payload;
      }
    );

    builder.addCase(fetchCreateUser.pending, (state) => {
      state.loading_create_user = true;
      state.sucess_create_user = false;
      state.error_create_user = false;
    });
    builder.addCase(fetchCreateUser.rejected, (state) => {
      state.loading_create_user = false;
      state.sucess_create_user = false;
      state.error_create_user = true;
    });
    builder.addCase(fetchCreateUser.fulfilled, (state) => {
      state.loading_create_user = false;
      state.sucess_create_user = true;
      state.error_create_user = false;
    });
  }
});

export default userSlice.reducer;
export const { reset } = userSlice.actions;
