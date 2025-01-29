import { PlantCard } from "@molecules/PlantCard";
import { IPlantsListProps } from "./PlantsList.props";
import "./PlantsList.css"

export const PlantsList: React.FC<IPlantsListProps> = ({plants}) => {
    return (
        <>
            {/* TODO : ajouter filtres */}
            <ul className="plantslist">
                {plants.map( (plant) => {
                    return (
                        <li key={plant.id}>
                            <PlantCard plant={plant} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}