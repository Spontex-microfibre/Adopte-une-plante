import { IconButton } from "@atoms/IconButton";
import { IFavoriteButtonProps } from "./FavoriteButton.props";
import { FaHeart, FaRegHeart, FaHeartBroken } from "react-icons/fa";
import { useState } from "react";
import "./FavoriteButton.css"

export const FavoriteButton: React.FC<IFavoriteButtonProps> = ({ onClick = () => { }, size, isFavorite = true }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <IconButton
            color={isFavorite || isHovered ? "red" : "gray"}
            Icon={isFavorite && isHovered ? FaHeartBroken : (isFavorite || isHovered ? FaHeart : FaRegHeart)}
            size={size}
            onClick={onClick}
            onMouseEnter={() => {
                setIsHovered(true);  // Changer l'état quand la souris entre sur l'icône
            }}
            onMouseLeave={() => {
                setIsHovered(false);  // Changer l'état quand la souris quitte l'icône
            }}
        />
    )
}