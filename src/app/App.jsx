import { Suspense } from "react";
import "../assets/styles/main.scss";
import Load from "../components/shared/Load/Load";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import Layout from "../components/Layouts/Layout";
import LayoutRoot from "../components/Layouts/LayoutRoot";

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Load type={"mainLoader"} />}>
				<Routes>
					<Route
						element={
							<LayoutRoot>
								<Layout />
							</LayoutRoot>
						}
					>
						<Route path="/" element={<MainPage />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
