import { Avatar } from "@atoms/index";
import { IPlantCardProps } from "./PlantCard.props";
import "./PlantCard.css"

export const PlantCard: React.FC<IPlantCardProps> = ({ plant, buttons }) => {

    const {image, name, description, type, availableForAdoption} = plant


    return (
      <article className="plantcard">
        <Avatar imageUrl={image} altText="Image de la plante" size="large"/>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{description}</p>
          {availableForAdoption ? <p>dispo !</p> : <p>pas dispo :/</p>}
          {buttons && buttons.map(button => button)}
      </article>
    );
  };