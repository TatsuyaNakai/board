import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const httpLink = createHttpLink({
	uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Token ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

root.render(
	<React.StrictMode>
		<CookiesProvider>
			<BrowserRouter>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</BrowserRouter>
		</CookiesProvider>
	</React.StrictMode>
);
