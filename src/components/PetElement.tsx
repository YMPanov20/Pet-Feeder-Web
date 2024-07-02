import { PetVM } from "../api";
import petService from "../services/pet-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PetElement({pet, activePetId, onActivate ,onPetDelete, deactivateAllPets}:{pet: PetVM,activePetId: string | null, onActivate: (petId: string) => void, onPetDelete: () => Promise<void>, deactivateAllPets: () => void}) {
    const navigator = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);

        useEffect(() => {
            setIsDisabled(activePetId !== null && activePetId !== pet.id);
        }, [activePetId, pet.id]);
 
      const handleActivate = async () => {
        try {
          if (!isDisabled) {
            await petService.makeActivePetRequest(pet.id ?? "");
            await onActivate(pet.id ?? "");
          }
        } catch (error) {
          toast.error("Error activating pet. Please try again later.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      };


    const deletepet = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        try {
            console.log(pet.id);
            await petService.makeDeletePetRequest(pet.id ?? '');

            toast.success("pet deleted successfully", {
              position: "bottom-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });

            await onPetDelete();
            await deactivateAllPets();

        } catch (error) {
            toast.error("Error deleting pet. Please try again later.", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    // Determine if the pet should appear disabled based on the activation count
   
    console.log("isDisabled " + isDisabled);
    return (
        <tr onClick={() => { if (!isDisabled) { handleActivate(); navigator(`/pets/${pet.id}`); }}} className={`transition-all duration-150 rounded-md ${isDisabled ? "bg-gray-200 text-gray-500 cursor-not-allowed" : pet.isActive ? "bg-green-500 text-white" : "bg-gray-300 hover:bg-gray-400 hover:text-white"}`}>
            <td className="p-5">{pet.animalName}</td>

            <td className="flex justify-end mt-2.5 rounded-md h-[100%] w-[90%]">
                <button onClick={(event) => { deletepet(event); }} disabled={isDisabled} className={`btn ring-offset-0 ${isDisabled ? "bg-gray-200 text-gray-500" : "hover:bg-red-700 hover:text-white"}`}>Delete</button>
            </td>
        </tr>
    )
}

export default PetElement