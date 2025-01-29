import { IPlant } from "types/plant";
import { IUser } from "types/user";

export interface IUserProps {
    user: IUser
    plants: IPlant[]
    canEdit: boolean
}