import { Button } from "@atoms/index";
import { IPlantProps } from "./Plant.props";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@store/useAuth";
import "./Plant.css"

export const Plant: React.FC<IPlantProps> = ({plant}) => {

    const {type, name, description, image, userId: ownerId, availableForAdoption} = plant

    const navigate = useNavigate()

    const {userId: loggedUserId} = useAuth()

    return (
        <main className="plant-layout">
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
                <p><strong>Type :</strong> {type}</p>
                <p>{description}</p>
                <p>{availableForAdoption ? "🌱 Disponible à l’adoption" : "❌ Déjà adoptée"}</p>
                {loggedUserId != ownerId && 
                    <Button label="Qui est mon propriétaire ?" onClick={() => {navigate(`/user/${ownerId}`)}}/>
                }
                
            </div>
        </main>
    );
}