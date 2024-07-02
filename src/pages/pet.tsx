import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import petService from '@/services/pet-service';
import { PetVM } from '@/api';

function pet() {
  const { id } = useParams<{ id: string }>();
  const [animalName, setAnimalName] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [weight, setWeight] = useState<number | undefined>(undefined);
  const [feedingTime, setFeedingTime] = useState('');
  const [feedingDay, setFeedingDay] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchPetDetails();
    }
  }, [id]);

  const fetchPetDetails = async () => {
    try {
      const response: AxiosResponse<PetVM> = await petService.makeGetPetByIdRequest(id||'');
      const pet: PetVM = response.data;
      setAnimalName(pet.animalName ||'');
      setAge(pet.age);
      setWeight(pet.weight);
      setFeedingTime(pet.timer||'');
      setFeedingDay(pet.day||'');
    } catch (error) {
      console.error('Error fetching pet details:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await petService.makeUpdatePetRequest(id ||'', animalName, age || 0, weight || 0, feedingTime, feedingDay);
      navigate('/mypets');
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

  return (
		<div className="container mx-auto mt-16">
			<h2 className="text-xl font-bold mb-4">Pet Details and Edit</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="flex flex-col">
					<label htmlFor="animalName" className="font-semibold">
						Animal Name:
					</label>
					<input
						type="text"
						id="animalName"
						value={animalName}
						onChange={(e) => setAnimalName(e.target.value)}
						className="border border-gray-300 rounded px-3 py-2 mt-1"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="age" className="font-semibold">
						Age:
					</label>
					<input
						type="number"
						id="age"
						value={age ?? ""}
						onChange={(e) => setAge(Number(e.target.value))}
						className="border border-gray-300 rounded px-3 py-2 mt-1"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="weight" className="font-semibold">
						Weight:
					</label>
					<input
						type="number"
						id="weight"
						value={weight ?? ""}
						onChange={(e) => setWeight(Number(e.target.value))}
						className="border border-gray-300 rounded px-3 py-2 mt-1"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="feedingTime" className="font-semibold">
						Feeding Time:
					</label>
					<input
						type="time"
						id="feedingTime"
						value={feedingTime}
						onChange={(e) => setFeedingTime(e.target.value)}
						className="border border-gray-300 rounded px-3 py-2 mt-1"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="feedingDay" className="font-semibold">
						Feeding Day:
					</label>
					<select
						id="feedingDay"
						value={feedingDay} // Ensure you have a state variable to handle this
						onChange={(e) => {
							console.log(e.target.value); // Log the value being set
							setFeedingDay(e.target.value); // Ensure you have a setter function for this
						}}
						required
						className="border border-gray-300 rounded px-3 py-2 mt-1"
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
				<div className="flex justify-between">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
					>
						Update
					</button>
				</div>
			</form>
		</div>
	);
}

export default pet;