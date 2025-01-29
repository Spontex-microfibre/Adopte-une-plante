import { Avatar } from "@atoms/Avatar/Avatar";
import { IPlantCardProps } from "./PlantCard.props";

export const PlantCard: React.FC<IPlantCardProps> = ({ plant, owner }) => {

    const {image, name, description, type, availableForAdoption} = plant
    const {firstname, avatar} = owner

    return (
      <article>
        <img src={image} alt={name} />
        <aside>
            <span>{firstname}</span>
            <Avatar imageUrl={avatar} altText="Avatar du propriétaire"/>
        </aside>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{description}</p>
          {availableForAdoption ? <p>dispo !</p> : <p>pas dispo :/</p>}
      </article>
    );
  };