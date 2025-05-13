import { configureStore } from "@reduxjs/toolkit";
import { FilterReducer } from "./FilterSlice";
import { SearchReducer } from "./SearchSlice";

export const store = configureStore({
    reducer: {
        filter: FilterReducer,
        search: SearchReducer,
    }
}); 