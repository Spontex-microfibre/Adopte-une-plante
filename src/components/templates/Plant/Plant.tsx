import { Button } from "@atoms/index";
import { IPlantProps } from "./Plant.props";
import { useNavigate } from "react-router-dom";

export const Plant: React.FC<IPlantProps> = ({plant}) => {

    const {type, name, description, image, userId: ownerId, availableForAdoption} = plant

    const navigate = useNavigate()

    return (
        <main className="plant-details">
            <div className="plant-image">
                <img src={image} alt={name} />
            </div>
            <div className="plant-info">
                <h1>{name}</h1>
                <p className="plant-type"><strong>Type :</strong> {type}</p>
                <p className="plant-description">{description}</p>
                <p className={`plant-status ${availableForAdoption ? "adoptable" : "not-adoptable"}`}>
                    {availableForAdoption ? "🌱 Disponible à l’adoption" : "❌ Déjà adoptée"}
                </p>
                <Button label="Qui est mon propriétaire ?" onClick={() => navigate(`/user/${ownerId}`)}/>
            </div>
        </main>
    );
}