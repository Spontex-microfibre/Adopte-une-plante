import { useFavorites } from "@store/useFavorites"
import { PlantsList } from "@organisms/PlantsList"

export const FavoritesPage: React.FC = () => {

    const {favoritesPlants} = useFavorites()

    return (
        <>
            {/* Créer un template qui s'occupe du titre et le layout, et appeler le template ici*/}
            <h1>Vos plantes préférées :</h1>
            <PlantsList plants={favoritesPlants}/>
        </>
    )
}