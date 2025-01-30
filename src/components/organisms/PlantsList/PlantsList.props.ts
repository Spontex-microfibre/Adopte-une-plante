import { IPlant } from "types/plant";

export interface IPlantsListProps {
    plants: IPlant[],
    canEdit?: boolean
}