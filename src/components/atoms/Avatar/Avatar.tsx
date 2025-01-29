import { IAvatarProps } from "./Avatar.props";

export const Avatar: React.FC<IAvatarProps> = ({ imageUrl, altText, size = "medium" }) => {

  // Définition des classes CSS en fonction de la taille de l'avatar
  const sizeClass = {
    small: "avatar-s",
    medium: "avatar-m",
    large: "avatar-l",
  };

  return (
    <img
      src={imageUrl}
      alt={altText}
      className={`avatar ${sizeClass[size]}`}
    />
  );
};