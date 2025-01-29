import axios from "axios";
import { IPlant } from "types/plant";

const API_URL = "https://6799e2df747b09cdccccdd02.mockapi.io/api/"

export const getPlants = async () => {
    const response = await axios.get<IPlant[]>(`${API_URL}plants`)
    return response.data;
}

export const getPlantById = async (id: number) => {
    const response = await axios.get<IPlant>(`${API_URL}plants/${id}`)
    return response.data;
}

export const getAvailableForAdoptionPlants = async () => {
    const response = await axios.get<IPlant[]>(`${API_URL}plants?availableForAdoption=true`)
    return response.data;
}

export const getPlantsByUserId = async (userId: number) => {
    const response = await axios.get<IPlant[]>(`${API_URL}plants?userId=${userId}`)
    return response.data;
}