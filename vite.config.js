import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    // resolve: {
    //     alias: [
    //         {
    //             find: "common",
    //             replacement: resolve(__dirname, "src/common"),
    //         },
    //     ],
    // },
    plugins: [react()],
});
