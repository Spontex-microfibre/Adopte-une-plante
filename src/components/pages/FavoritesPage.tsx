import { useFavorites } from "@store/useFavorites"
import { PlantsList } from "@organisms/PlantsList"

export const FavoritesPage: React.FC = () => {

    const {favoritesPlants} = useFavorites()

    return (
        <>
            <h1>Vos plantes préférées :</h1>
            <PlantsList plants={favoritesPlants}/>
        </>
    )
}