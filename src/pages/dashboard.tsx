import React, { useState } from "react";
import petService from "@/services/pet-service";
import { Form, Link, useNavigate} from "react-router-dom";
function Dashboard() {
	const [animalName, setAnimalName] = useState("");
	const [age, setAge] = useState("");
	const [weight, setWeight] = useState("");
	const [feedingTime, setFeedingTime] = useState("");
	const [feedingDay, setFeedingDay] = useState("Monday");
	const navigate  = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try{
			await petService.makeCreatePetRequest(
				animalName,
				parseInt(age),
				parseInt(weight),
				feedingTime,
				feedingDay
			);
			navigate("/mypets");
		}catch(error){
			console.error("Failed to create pet:", error);
		}
		
	};

	return (
		<div className="dark min-h-screen flex flex-col">
			<div className="flex flex-grow justify-center items-center">
				<div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
					<h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
						Submit Animal Parameters
					</h2>
					<Form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="animalName"
								className="block text-gray-700 font-semibold mb-2"
							>
								Animal Name
							</label>
							<input
								type="text"
								id="animalName"
								value={animalName}
								onChange={(e) => setAnimalName(e.target.value)}
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
							/>
						</div>
						<div>
							<label
								htmlFor="age"
								className="block text-gray-700 font-semibold mb-2"
							>
								Age
							</label>
							<input
								type="number"
								id="age"
								value={age}
								onChange={(e) => setAge(e.target.value)}
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
							/>
						</div>
						<div>
							<label
								htmlFor="weight"
								className="block text-gray-700 font-semibold mb-2"
							>
								Weight (kg)
							</label>
							<input
								type="number"
								id="weight"
								value={weight}
								onChange={(e) => setWeight(e.target.value)}
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
							/>
						</div>
						<div>
							<label
								htmlFor="feedingTime"
								className="block text-gray-700 font-semibold mb-2"
							>
								Feeding Time
							</label>
							<input
								type="time"
								id="feedingTime"
								value={feedingTime}
								onChange={(e) => {
									console.log(e.target.value); // Log the value being set
									setFeedingTime(e.target.value);
								}}
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
							/>
						</div>
						<div>
							<label
								htmlFor="feedingDate"
								className="block text-gray-700 font-semibold mb-2"
							>
								Day for feeding
							</label>
							<select
								id="feedingDay"
								value={feedingDay} // Ensure you have a state variable to handle this
								onChange={(e) => {
									console.log(e.target.value); // Log the value being set
									setFeedingDay(e.target.value); // Ensure you have a setter function for this
								}}
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
							>
								<option value="Monday">Monday</option>
								<option value="Tuesday">Tuesday</option>
								<option value="Wednesday">Wednesday</option>
								<option value="Thursday">Thursday</option>
								<option value="Friday">Friday</option>
								<option value="Saturday">Saturday</option>
								<option value="Sunday">Sunday</option>
							</select>
						</div>
						<label className="label">
							<Link
								to="/mypets"
								className="label-text-alt link link-hover text-[#0C4F12]"
							>
								Already have a pet? See your pets
							</Link>
						</label>
						<button
							type="submit"
							className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300"
						>
							Submit
						</button>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
