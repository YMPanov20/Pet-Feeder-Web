import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import storageService from '@/services/storage-service';
function NavBarLogged() {
	const navigate = useNavigate();
	const logout = () => {
		storageService.deleteUserData();
		navigate('/');
	};
  return (
		<>
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<Link to="/" className="btn btn-ghost text-xl">
						<img className="w-12 h-12" src="/dog.png" alt="LogoDog" />
					</Link>
				</div>
				<div className="flex-none gap-2">
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img alt="Tailwind CSS Navbar component" src="acc-pic.jpg" />
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<Link to="/dashboard">Add pet</Link>
							</li>
							<li>
								<button onClick={logout}>Logout</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default NavBarLogged