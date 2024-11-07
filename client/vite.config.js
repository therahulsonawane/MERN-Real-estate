import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    "/server": {
      target: "http://localhost:3000",
      secure: false,
    },
  },
  plugins: [react()],
});
