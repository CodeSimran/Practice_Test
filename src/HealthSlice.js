import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHealthIssues = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
});

const healthSlice = createSlice({
  name:"posts",
  initialState:{
    issues:[],
    selectedIssue:null,
    loading:false,
    error:null
  },
  reducers:{
    selectIssue:(state,action)=>{
      state.selectedIssue = action.payload;
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchHealthIssues.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchHealthIssues.fulfilled, (state, action) => {
      state.loading = false;
      state.issues = action.payload;
    })
    .addCase(fetchHealthIssues.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});
export const { selectIssue } = healthSlice.actions;
export default healthSlice.reducer;

