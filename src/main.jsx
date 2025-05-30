import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalContextProvider } from "./store/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
	<GlobalContextProvider>
		<App />
	</GlobalContextProvider>,
);
