import { Button } from "@atoms/index";
import { IPlantProps } from "./Plant.props";
import { useNavigate } from "react-router-dom";
import { Loader } from "@atoms/Loader";
import "./Plant.css"

export const Plant: React.FC<IPlantProps> = ({ plant, isFetching }) => {

    const navigate = useNavigate()

    if (isFetching) {
        return <Loader loading={isFetching} paddingTop={"200px"} />
    }

    const { type, name, description, image, userId: ownerId, availableForAdoption } = plant

    return (
        <article className="plant-layout">
            <header className="plant-header">
                <img src={image} alt={name} />
                <div className="plant-header-right">
                    <h1>{name}</h1>
                    <p><strong>Type :</strong> {type}</p>
                </div>
            </header>
            <main className="plant-content">
                <p>{description}</p>
                <p className="plant-content-adoptable">{availableForAdoption ? "🌱 Disponible à l’adoption" : "❌ Déjà adoptée"}</p>
            </main>
            <footer className="plant-footer">
                <Button
                    label="Qui est mon propriétaire ?"
                    onClick={() => {
                        navigate(`/Adopte-une-plante/users/${ownerId}`)
                    }}
                />
            </footer>
        </article>
    )
}