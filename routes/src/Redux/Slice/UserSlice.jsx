import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Error from '../../Component/Error/Error';

export const fetchAllUsers = createAsyncThunk('showUser', async () => {
    try {
        let response = await axios.get('https://64e34f09bac46e480e789213.mockapi.io/user');
        return response.data
    }
    catch (err) {
        console.log(err)
    }

});

export const addUser = createAsyncThunk("addUser", async (formData, { rejectWithValue }) => {
    console.log('call')
    const response = await fetch("https://64e34f09bac46e480e789213.mockapi.io/user",
        {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        }
    );
    try {
        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})



export const updateUser = createAsyncThunk(
    "user/update",
    async (thunkAPI) => {
        console.log('thunkAPI', thunkAPI)
        try {
            let data = await axios.put(`https://64e34f09bac46e480e789213.mockapi.io/user/${thunkAPI.id}`, thunkAPI.value);
            console.log("data",data)
        } catch (err) {
            // toast.error("failed to update", {
            //     position: "top-center"
            // })
            console.log(err)
        }
    }
)


const userReducer = createSlice({
    name: 'users',
    initialState: {
        allusers: [],
        loading: false,
        error: null,
    },

    extraReducers: {
        [fetchAllUsers.pending]: (state) => {
            state.loading = true;
        },
        [fetchAllUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.allusers = action.payload;
        },
        [fetchAllUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [addUser.pending]: (state) => {
            state.loading = true;
        },
        [addUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.allusers.push(action.payload);
        },
        [addUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {

            const { id, data } = action.payload;
            console.log('id', id)
            state.allusers = state.allusers.map((ele) =>
                // console.log('state.allusers', state.allusers)
                ele.id === id ? data : ele
            );
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default userReducer.reducer