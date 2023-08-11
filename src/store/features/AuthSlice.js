import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

const checkExp = (token) => {
  if (!localStorage.getItem("jwt")) {
    return null;
  }
  const decode = jwt_decode(localStorage.getItem("jwt"));
  if (Date.now() > decode.exp * 1000) {
    return null;
  } else {
    return token;
  }
};

const initialState = {
  token: checkExp(localStorage.getItem("jwt")) || null,
  user: checkExp(localStorage.getItem("jwt"))
    ? jwt_decode(localStorage.getItem("jwt"))
    : null,
  isAuthed: checkExp(localStorage.getItem("jwt")) ? true : false,
  loading: false,
  error: "",
  registered: false,
};

export const signup = createAsyncThunk(
  "signUp",
  ({ email, name, address, password }, { rejectWithValue }) => {
    const data = {
      email: email,
      name: name,
      address: address,
      password: password,
    };
    return axios
      .post("http://127.0.0.1:5000/auth/register", data)
      .then((res) => res.data)
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);

export const signIn = createAsyncThunk(
  "signIn",
  ({ email, password, rememberMe }, { rejectWithValue }) => {
    const data = { email: email, password: password };
    return axios.post("http://127.0.0.1:5000/auth/login", data).catch((err) => {
      return rejectWithValue(err);
    });
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetReg: (state) => {
      state.registered = false;
    },
    signOut: (state) => {
      state.isAuthed = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("jwt");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.registered = false;
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.registered = true;
      state.loading = false;
      state.regitered = true;
      toast("Welcome aboard! 🎉, redirecting to sign in... ", {
        type: "success",
      });
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.registered = false;
      state.loading = false;
      state.error = action.payload.response.data.message;
      toast(state.error, {
        type: "error",
      });
    });
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isAuthed = true;
      state.loading = false;
      state.error = false;
      state.token = action.payload.data.token;
      state.user = jwt_decode(action.payload.data.token);
      if (action.meta.arg.rememberMe) {
        localStorage.setItem("jwt", action.payload.data.token);
      }
      toast("Welcome back, style icon! 🌟 Let's slay the day! 💃😎", {
        type: "success",
      });
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.message;
      toast(state.error, { type: "error" });
    });
  },
});

export default AuthSlice.reducer;
export const { resetReg, setFormValidationError, signOut } = AuthSlice.actions;
