import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsersData = createAsyncThunk("getUsersData", async () => {
    let response = ""
    try {
        response = await axios.get("https://dummyjson.com/users?limit=10")

    } catch (error) {
        throw error
    }
    return response
})
