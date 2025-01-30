import { IPlant } from "types/plant";
import { create } from "zustand";

interface IUseFavorites {
    favoritesPlants: IPlant[];
    toggleFavorite: (plant: IPlant) => void
}

export const useFavorites = create<IUseFavorites>((set, get) => ({
    favoritesPlants: [],
    toggleFavorite: (plant) => {
        const currentFavorites = get().favoritesPlants;
        
        // Si la plante est déjà dans les favoris, on la supprime, sinon on l'ajoute
        const isFavorite = currentFavorites.some((favorite) => favorite.id === plant.id);
        
        if (isFavorite) {
          set({
            favoritesPlants: currentFavorites.filter((favorite) => favorite.id !== plant.id),
          });
        } else {
          set({
            favoritesPlants: [...currentFavorites, plant],
          });
        }
      }
}));