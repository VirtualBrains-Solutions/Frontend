import axios from "axios";
export default axios.create({
    baseURL: import.meta.env.VITE_URL,
    headers: {
        accept: "application/json",
    },
});

//  baseURL: import.meta.env.VITE_URL