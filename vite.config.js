import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	// server: {
	// 	proxy: {
	// 		"/services": {
	// 			target: "https://server.royalfit.ae",
	// 			changeOrigin: true,
	// 			secure: false,
	// 		},
	// 	},
	// },
});