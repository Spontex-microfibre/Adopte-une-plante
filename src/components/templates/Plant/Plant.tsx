import { Button } from "@atoms/index";
import { IPlantProps } from "./Plant.props";
import { useNavigate } from "react-router-dom";
import { Loader } from "@atoms/Loader";
import "./Plant.css"

export const Plant: React.FC<IPlantProps> = ({ plant, isFetching }) => {

    
    const navigate = useNavigate()
    
    if (isFetching) {
        return <Loader loading={isFetching} paddingTop={"200px"}/>
    } else {
        const { type, name, description, image, userId: ownerId, availableForAdoption } = plant
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
                    <Button label="Qui est mon propriétaire ?" onClick={() => { navigate(`/users/${ownerId}`) }} />
                </div>
            </main>
        );
    }
}