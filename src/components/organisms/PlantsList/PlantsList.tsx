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
                                    <Button key={"En savoir plus"} label="En savoir plus" onClick={() => navigate(`/plant/${plant.id}`)}/>
                                ]}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}