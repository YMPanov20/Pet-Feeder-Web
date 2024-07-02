import { PetApi, PetIM, PetVM } from "../api";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service"

export class PetService extends WebApiService {
  PetApi: PetApi;

  constructor() {
    super();
    this.PetApi = new PetApi();
  }

  public async makeCreatePetRequest(animalName: string, age: number, weight: number, timer: string, day:string): Promise<AxiosResponse<PetVM, any>> {
    const createPetRequest: PetIM = ({
      animalName: animalName,
      age: age,
      weight: weight,
      timer: timer,
      day: day,
    });
    
    return await this.PetApi.apiPetPost(createPetRequest, this.generateHeader());
  }

  public async makeDeletePetRequest(id: string): Promise<AxiosResponse<void>> {
    return await this.PetApi.apiPetIdDelete(id, this.generateHeader());
  }

  public async makeActivePetRequest(id: string): Promise<AxiosResponse<void>> {
    return await this.PetApi.apiPetActivateIdPut(id, this.generateHeader());
  }

  public async makeDeactiveAllPetsRequest(): Promise<AxiosResponse<void>> {
    return await this.PetApi.apiPetDeactivateAllPut(this.generateHeader());
  }

  public async makeGetPetsRequest(): Promise<AxiosResponse<PetVM[], any>> {
    return await this.PetApi.apiPetGet(this.generateHeader());
  }

  public async makeGetPetByIdRequest(id: string): Promise<AxiosResponse<PetVM, any>> {
    return await this.PetApi.apiPetIdGet(id, this.generateHeader());
  }
  public async makeUpdatePetRequest(id: string, animalName: string, age: number, weight: number, timer: string, day:string): Promise<AxiosResponse<PetVM, any>> {
    const updatePetRequest: PetIM = ({
      animalName: animalName,
      age: age,
      weight: weight,
      timer: timer,
      day: day,
    });

    return await this.PetApi.apiPetIdPut(id, updatePetRequest, this.generateHeader());
  }
}

const petService = new PetService();
export default petService;