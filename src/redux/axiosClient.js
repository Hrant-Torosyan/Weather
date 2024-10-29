import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL;
const axiosClient = axios.create({
	baseURL: apiUrl,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});



export default axiosClient;
