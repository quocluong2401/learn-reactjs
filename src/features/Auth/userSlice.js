import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'
import userApi from 'api/userApi'

export const register = createAsyncThunk('user/register', async (payload) => {
       

        // call api to register
     
        try {
            const data = await  userApi.register(payload)
            localStorage.setItem('acccess_token ', data.jwt)
            localStorage.setItem('user',JSON.stringify(data.user))
            //save data to localstorage 
            return data.data
          } catch (err) {
            // Use `err.response.data` as `action.payload` for a `rejected` action,
            // by explicitly returning it using the `rejectWithValue()` utility
            return isRejectedWithValue(err)
          }
    });
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.current =     action.payload;
        })
      },
    // extraReducers: {
    //     [register.fullfilled]: (state, payload) =>  {
    //         state.current =     payload.user;
    //     }
    // }
})

const { reducer} = userSlice;

export default reducer;
