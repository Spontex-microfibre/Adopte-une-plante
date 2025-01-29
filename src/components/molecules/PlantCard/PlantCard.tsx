import { Avatar, Button } from "@atoms/index";
import { IPlantCardProps } from "./PlantCard.props";
import "./PlantCard.css"
import { useNavigate } from "react-router-dom";

export const PlantCard: React.FC<IPlantCardProps> = ({ plant }) => {

    const {id, image, name, description, type, availableForAdoption} = plant

    const navigate = useNavigate()

    return (
      <article className="plantcard">
        <Avatar imageUrl={image} altText="Image de la plante" size="large"/>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{description}</p>
          {availableForAdoption ? <p>dispo !</p> : <p>pas dispo :/</p>}
          <Button label="En savoir plus" onClick={() => navigate(`/plant/${id}`)}/>
      </article>
    );
  };