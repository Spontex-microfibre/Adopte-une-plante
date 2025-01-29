import { Avatar } from "@atoms/index";
import { IPlantCardProps } from "./PlantCard.props";
import "./PlantCard.css"

export const PlantCard: React.FC<IPlantCardProps> = ({ plant, buttons }) => {

    const {image, name, type, availableForAdoption} = plant

    return (
      <article className="plantcard">
        <Avatar imageUrl={image} altText="Image de la plante" size="large"/>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{availableForAdoption ? "Disponible à l’adoption 🌱" : "Déjà adoptée ❌"}</p>
          {buttons && buttons.map(button => button)}
      </article>
    );
  };