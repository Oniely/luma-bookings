import axios from "axios";

const axiosClient = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

export default axiosClient;
