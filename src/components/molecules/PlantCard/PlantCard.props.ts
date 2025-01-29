import { IUser } from "types/user"
import { IPlant } from "types/plant"

export interface IPlantCardProps {
    plant: IPlant,
    owner: IUser
}