import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import petService from "@/services/pet-service";
import { PetVM } from "@/api";
import PetElement from "@/components/PetElement";

function mypets() {
  const [activePetId, setActivePetId] = useState<string | null>(null);
	const [petRows, setPetRows] = useState(5);
	const [pets, setPets] = useState<Array<PetVM>>([]);

  const refreshPets = async () => {
		try {
			(async () => {
				const response =
					(await petService.makeGetPetsRequest()) as AxiosResponse<
						PetVM[]
					>;

				setPetRows(response.data.length);
				setPets(response.data);
			})();
		} catch (error) {
			console.log(error);
		}
	};

  const deactivateAllPets = async () => {
    try {
      await petService.makeDeactiveAllPetsRequest();
      setActivePetId(null);
      localStorage.removeItem('activePetId');
      await refreshPets();
    } catch (error) {
      console.log(error);
    }
  };

	useEffect(() => {
		(async () => {
			const response = (await petService.makeGetPetsRequest()) as AxiosResponse<
				PetVM[]
			>;

			setPetRows(response.data.length);
			setPets(response.data);
      const storedActivePetId = localStorage.getItem('activePetId');
      if (storedActivePetId) {
        setActivePetId(storedActivePetId);
      }
		})();
	}, []);

  const handleActivate = (petId: string) => {
    setActivePetId(petId);
    localStorage.setItem('activePetId', petId);
  };

	return (
		<>
			<div className="w-[100%] h-screen grid place-items-center p-10">
				<div
					className={`w-[90%] h-[60%] bg-gray-500 place-self-center grid-rows-${petRows} rounded-md overflow-y-scroll p-5`}
				>
					<table className="bg-[#16A34A] text-left relative table-fixed w-[100%]">
						<tbody>
							{pets.map((pet) => (
								
									<PetElement
										key={pet.id}
										pet={pet}
										activePetId={activePetId}
										onActivate={() => handleActivate(pet.id || '')}
										onPetDelete={refreshPets}
										deactivateAllPets={deactivateAllPets}
									/>
							))}
						</tbody>
					</table>
				</div>
				<button
					onClick={deactivateAllPets}
					className="mb-4 p-2 bg-red-500 text-white rounded"
				>
					Deactivate All Pets
				</button>
			</div>
		</>
	);
}

export default mypets;
