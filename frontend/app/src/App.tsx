import React from "react";
import { Routes, Route } from "react-router-dom";

import { useCategoriesQuery } from "./hooks/useCategoriesQuery";
import { useCurrentAdminQuery } from "./hooks/useCurrentAdminQuery";
import { AdminProvider } from "./utils/AdminProvider";
import Categories from "./Categories";
import Posts from "./Posts";
import LoginForm from "./LoginForm";
import NoRouteMatch from "./NoRouteMatch";

function App() {
	const { data: categoriesData, loading: categoriesLoading, error: categoriesError } = useCategoriesQuery();
	const { data: adminData, loading: adminLoading } = useCurrentAdminQuery();

	if (categoriesLoading || adminLoading) return <p>Loading...</p>;
	if (categoriesError) return <p>Error...</p>;

	return (
		<AdminProvider value={adminData?.currentAdmin}>
			<Routes>
				<Route index element={<Categories categories={categoriesData!.categories} />} />
				{categoriesData!.categories!.map((category, i: number) => (
					<React.Fragment key={i}>
						<Route
							path={`/categories/${category.id}`}
							element={<Posts id={category.id} categoryName={category.name} />}
						/>
					</React.Fragment>
				))}
				<Route path="/login" element={<LoginForm />} />
				<Route path="*" element={<NoRouteMatch />} />
			</Routes>
		</AdminProvider>
	);
}

export default App;
