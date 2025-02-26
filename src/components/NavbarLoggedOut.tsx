import { Link, Outlet } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<a href="#choose">Choose</a>
							</li>
							<li>
								<a href="#setup">Setup</a>
							</li>
							<li>
								<a href="#customer-reviews">Reviews</a>
							</li>
						</ul>
					</div>
					<Link to="/" className="btn btn-ghost text-xl">
						<img className="w-12 h-12" src="/dog.png" alt="LogoDog" />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a href="#choose">Choose</a>
						</li>
						<li>
							<a href="#setup">Setup</a>
						</li>
						<li>
							<a href="#customer-reviews">Reviews</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<Link
						to="/login"
						className="btn text-white bg-[#0C4F12] hover:bg-[#0A3E0F]"
					>
						Log in
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Navbar