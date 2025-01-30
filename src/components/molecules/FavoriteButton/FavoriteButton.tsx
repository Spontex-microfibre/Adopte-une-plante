import { IconButton } from "@atoms/IconButton";
import { IFavoriteButtonProps } from "./FavoriteButton.props";
import { FaHeart } from "react-icons/fa";
import "./FavoriteButton.css"

export const FavoriteButton: React.FC<IFavoriteButtonProps> = ({onClick = () => {}, size}) => {
    return (
        <IconButton color="red" Icon={FaHeart} size={size} onClick={onClick}/>
    )
}