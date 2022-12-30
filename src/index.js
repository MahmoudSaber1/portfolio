import React from "react";
import ReactDOM from "react-dom/client";
import "./common/styles/theme.css";
import "./common/styles/index.css";
import App from "./App";

// Import All Providers
import { Provider } from "react-redux";
import store from "./store";

import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);
