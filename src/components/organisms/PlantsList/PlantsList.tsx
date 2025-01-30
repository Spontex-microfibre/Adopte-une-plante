import { PlantCard } from "@molecules/PlantCard";
import { IPlantsListProps } from "./PlantsList.props";
import { Button } from "@atoms/Button";
import { useNavigate } from "react-router-dom";
import { useDeletePlant } from "@hooks/mutations";
import "./PlantsList.css"
import { FavoriteButton } from "@molecules/FavoriteButton";
import { useFavorites } from "@store/useFavorites";

export const PlantsList: React.FC<IPlantsListProps> = ({plants, canEdit = false}) => {

    const navigate = useNavigate()

    const {toggleFavorite} = useFavorites()

    const { mutate: deletePlant, } = useDeletePlant()

    return (
        <>
            {/* TODO : ajouter filtres */}
            <ul className="plantslist">
                {plants.map( (plant) => {
                    //Mon composants card permet de lui envoyer les boutons qu'il doit afficher, je les génère dynamiquement selon mes droits d'édition sur la card
                    const buttonsToDisplay: React.ReactNode[] = canEdit
                        ? [
                            <Button key={"Modifier"} label="Modifier" onClick={() => navigate(`/plants/edit/${plant.id}`)}/>,
                            <Button key={"Supprimer"} label="Supprimer" onClick={() => deletePlant(plant.id)}/>,
                        ] 
                        : [
                            <Button key={"Plus d'informations"} label="Plus d'informations" onClick={() => navigate(`/plants/${plant.id}`)}/>,
                            <FavoriteButton onClick={() => {
                                console.log("favorite click: "+plant.id)
                                toggleFavorite(plant)
                            }} />
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