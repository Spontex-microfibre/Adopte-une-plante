import { IPlant } from "types/plant"

export interface IPlantCardProps {
    plant: IPlant
    buttons?: React.ReactNode[] //Liste de boutons à afficher en bas de la card
}