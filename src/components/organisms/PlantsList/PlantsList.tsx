import { PlantCard } from "@molecules/PlantCard";
import { IPlantsListProps } from "./PlantsList.props";
import { Button } from "@atoms/Button";
import { useNavigate } from "react-router-dom";
import "./PlantsList.css"

export const PlantsList: React.FC<IPlantsListProps> = ({plants, canEdit = false}) => {

    const navigate = useNavigate()

    return (
        <>
            {/* TODO : ajouter filtres */}
            <ul className="plantslist">
                {plants.map( (plant) => {
                    const buttonsToDisplay: React.ReactNode[] = canEdit
                        ? [
                            <Button key={"Modifier"} label="Modifier" onClick={() => navigate(`/plants/edit/${plant.id}`)}/>,
                            <Button key={"Supprimer"} label="Supprimer" onClick={() => console.log("delete" + plant.id)}/>
                        ] 
                        : [
                            <Button key={"Plus d'informations"} label="Plus d'informations" onClick={() => navigate(`/plants/${plant.id}`)}/>
                        ]
                    return (
                        <li key={plant.id}>
                            <PlantCard
                                plant={plant}
                                buttons={buttonsToDisplay}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}