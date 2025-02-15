import axios from "axios";
import { IUser } from "types/user";

const API_URL = "https://6799e2df747b09cdccccdd02.mockapi.io/api/"

export const getUserById = async (id: number) => {
    const response = await axios.get<IUser>(`${API_URL}users/${id}`)
    return response.data;
}

export const updateUser = async (user: IUser) => {
    const response = await axios.put<IUser>(`${API_URL}users/${user.id}`, user);
    return response.data;
}