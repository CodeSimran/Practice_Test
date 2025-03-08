import { configureStore } from "@reduxjs/toolkit";
import healthReducer from "./src/HealthSlice";

const store = configureStore({
    reducer: {
        health: healthReducer
    }
    });
    export default store;
