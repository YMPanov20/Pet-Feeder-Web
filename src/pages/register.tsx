import { useState, useEffect } from 'react'
import authenticationService from "../services/authentication-service";
import {Form, Link, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
  let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onChangeEmail = (event: any) => {
	setEmail(event.target.value);
	};

	const onChangePassword = (event: any) => {
	setPassword(event.target.value);
	};
	async function submit(event: any) {

		event.preventDefault(); 

		if (password === String("") || !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
		  if (password === String("")) {
			toast.error(`Verification error: password required`, {
			  position: "bottom-center",
			  autoClose: 5000,
			  hideProgressBar: false,
			  closeOnClick: true,
			  pauseOnHover: true,
			  draggable: true,
			  progress: undefined,
			  theme: "dark",
			})
			return;
		  }
		  toast.error(`Verification error: check email address`, {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		  })
		  return;
		}
	
		await authenticationService.makeRegisterRequest(email, password).then(function () {
		  navigate("/login")
	
	
		}).catch(function(error) {
		  const message = error.response.data.message || error.response.data.errors[Object.keys(error.response?.data.errors)[0]];
		  toast.error(`Verification error: ${message}`, {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			});
		})
	  }

	  const [isDarkMode, setIsDarkMode] = useState(false);

	  useEffect(() => {
		const handleMatchMedia = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
		  setIsDarkMode(e.matches);
		};
	
		const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQueryList.addEventListener('change', handleMatchMedia); // Use addEventListener
	
		// Initial check
		setIsDarkMode(mediaQueryList.matches);
	
		return () => {
		  mediaQueryList.removeEventListener('change', handleMatchMedia); // Use removeEventListener
		};
	  }, []);

  return (
		<main className={isDarkMode? "dark" : ""}>
			<div className="hero bg-base-200 min-h-screen text-white">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<div className="card-header">
							<h1 className="card-title text-black dark:text-foreground pl-10 p-5 pb-0 text-4xl font-bronco">Register</h1>
						</div>
						<Form onSubmit={submit} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="email"
									value={email}
									onChange={onChangeEmail}
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									value={password}
									onChange={onChangePassword}
									className="input input-bordered"
									required
								/>
								<label className="label">
									<Link
										to="/login"
										className="label-text-alt link link-hover text-[#0C4F12]"
									>
										Already have an account? Sign in
									</Link>
								</label>
							</div>
							<div className="form-control mt-6 ">
								<input
									type="submit"
									value="Sign up"
									className="btn text-white font-sans bg-[#0C4F12] hover:bg-[#0A3E0F]"
								/>
							</div>
						</Form>
						<ToastContainer />
					</div>
				</div>
			</div>
		</main>
	);
}

