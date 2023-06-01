import { configureStore } from "@reduxjs/toolkit";

import { scorerSlice } from "../reducers/scorerSlice";

export default configureStore({
    reducer:{scorer:scorerSlice.reducer}
})