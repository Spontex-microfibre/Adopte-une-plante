import { IAvatarProps } from "./Avatar.props";
import "./Avatar.css"

export const Avatar: React.FC<IAvatarProps> = ({ imageUrl, altText, size = "medium" }) => {

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