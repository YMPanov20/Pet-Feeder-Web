import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AuthGuardWhenLogin from "./components/AuthGuardWhenLogin";
import AuthGuardWhenLogout from "./components/AuthGuardWhenLogout";
import './App.css'
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import DashBoard from  './pages/dashboard'
import MyPets from './pages/mypets'
import Pet from './pages/pet'
import NavBarLogged from "./components/NavBarLoggedIn";
import Footer from "./components/Footer";
import NavbarLoggedOut from "./components/NavbarLoggedOut";

const App = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route element={< AuthGuardWhenLogout/>}>
				<Route path="/">
					<Route element={<Footer />}>
						<Route element={<NavbarLoggedOut />}>
							<Route index element={<Home />} />
						</Route>
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
					</Route>
				</Route>
			</Route>

			<Route element={<AuthGuardWhenLogin />}>
				<Route element={<NavBarLogged />}>
					<Route element={<Footer />}>
						<Route path="dashboard" element={<DashBoard />} />
						<Route path="mypets" element={<MyPets />} />
						<Route path="pets/:id" element={<Pet />} />
					</Route>
				</Route>
			</Route>
		</>,
	),
);

export default App
