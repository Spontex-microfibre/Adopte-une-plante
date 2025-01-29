import { PlantCard } from "@molecules/PlantCard";
import { IPlantsListProps } from "./PlantsList.props";
import { Button } from "@atoms/Button";
import { useNavigate } from "react-router-dom";
import "./PlantsList.css"

export const PlantsList: React.FC<IPlantsListProps> = ({plants}) => {

    const navigate = useNavigate()

    return (
        <>
            {/* TODO : ajouter filtres */}
            <ul className="plantslist">
                {plants.map( (plant) => {
                    return (
                        <li key={plant.id}>
                            <PlantCard
                                plant={plant}
                                buttons={[
                                    <Button key={"Plus d'informations"} label="Plus d'informations" onClick={() => navigate(`/plant/${plant.id}`)}/>
                                ]}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}