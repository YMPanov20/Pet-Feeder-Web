import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
  return (
		<div className="dark">
			<div className="hero bg-base-200 min-h-screen" id="choose">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="relative image-container">
						<span className="circle"></span>
						<img src="doberman.png" className="max-w-sm rounded-lg" />
					</div>
					<div data-aos-duration="1000" data-aos="fade-up">
						<h1 className="text-8xl font-bold text-background font-bronco">
							choose your pet
							<hr className="mt-5 bg-[#0C4F12] h-2 rounded-full" />
						</h1>
						<p className="py-6">
							Make life easier and your pets happier with our Automatic Pet
							Feeder. Ideal for the busy pet parent.
						</p>
					</div>
				</div>
			</div>

			<div className="hero bg-base-200 min-h-screen" id="setup">
				<div className="hero-content flex-col lg:flex-row">
					<div className="relative image-container">
						<span className="circle"></span>
						<img
							src="clock.png"
							className="max-w-sm rounded-lg translate-x-[20%]"
						/>
					</div>
					<div data-aos-duration="1000" data-aos="fade-up">
						<h1 className="text-8xl font-bold text-foreground font-bronco">
							Set up your timer
							<hr className="mt-5 bg-[#0C4F12] h-2 rounded-full" />
						</h1>
						<p className="py-6 text-background">
							Say goodbye to worrying about feeding times and hello to peace of
							mind. Our Automatic Pet Feeder is designed for the modern pet
							parent who values convenience and quality care. Perfect for those
							with busy schedules, this innovative feeder ensures your furry
							friends receive their meals exactly when they're supposed to,
							making every day just a little bit easier and your pets' lives a
							whole lot happier.
						</p>
						<Link to="/register">
							<button className="btn absolute right-0 text-white bg-[#0C4F12] hover:bg-[#0A3E0F]">
								Get Started
							</button>
						</Link>
					</div>
				</div>
			</div>

			<div
				className="bg-gradient-to-b from-white to-gray-400 py-20 text-center"
				id="customer-reviews"
			>
				<div className="max-w-5xl mx-auto">
					<h2 className="mb-10 text-5xl text-gray-800">Customer Reviews</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
						<div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
							<p className="text-xl text-gray-800 mb-5 line-clamp-3">
								"Great products! I'm really impressed with the quality."
							</p>
							<div className="flex justify-center mb-4">
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
							</div>
							<cite className="italic text-gray-500">- John Doe</cite>
						</div>
						<div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
							<p className="text-xl text-gray-800 mb-5 line-clamp-3">
								"Excellent customer service and fast delivery."
							</p>
							<div className="flex justify-center mb-4">
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9734;
								</span>
							</div>
							<cite className="italic text-gray-500">- Jane Smith</cite>
						</div>
						<div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
							<p className="text-xl text-gray-800 mb-5 line-clamp-3">
								"The product exceeded my expectations &#128293;"
							</p>
							<div className="flex justify-center mb-4">
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
							</div>
							<cite className="italic text-gray-500">- Emily Johnson</cite>
						</div>
						<div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
							<p className="text-xl text-gray-800 mb-5 line-clamp-3">
								"Impressive quality and great value for money!"
							</p>
							<div className="flex justify-center mb-4">
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9733;
								</span>
								<span className="text-2xl text-yellow-500 transition-transform transform hover:scale-125">
									&#9734;
								</span>
							</div>
							<cite className="italic text-gray-500">- Michael Brown</cite>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
