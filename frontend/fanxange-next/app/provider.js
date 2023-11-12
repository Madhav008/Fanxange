//provider.js
"use client";
import { Provider } from "react-redux";
import { store } from "../app/front1/store/store";

export function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>;
}