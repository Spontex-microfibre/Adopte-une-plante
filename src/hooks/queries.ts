import { useQuery } from "@tanstack/react-query";
import { getPlantById, getPlants, getPlantsByUserId } from "@api/plants";
import { getUserById } from "@api/users";

export function usePlants() {
    return useQuery({
        queryFn: getPlants, // fonction de fetch à executer pour la query
        queryKey: ["plants"], // on attribue un identifiant UNIQUE à cette req pour l'invalider + tard si besoin
        staleTime: 1000 * 60 * 5, // Garde les données valides pendant 5 minutes
        refetchOnWindowFocus: false, // Empêche le refetch automatique quand on revient sur la page
        refetchOnMount: false, // Empêche un refetch automatique au montage si les données existent déjà
    })
}

export function useUserById(userId: number) {
    return useQuery({
        queryFn: () => getUserById(userId), // Fonction de fetch pour récupérer l'utilisateur par ID
        queryKey: ["userById", userId], // Utilise l'ID de l'utilisateur pour la clef de cache
        staleTime: 1000 * 60 * 5, // Garde les données valides pendant 5 minutes
        refetchOnWindowFocus: false, // Empêche le refetch automatique quand on revient sur la page
        refetchOnMount: false, // Empêche un refetch automatique au montage si les données existent déjà
    });
}

export function usePlantById(plantId: number) {
    return useQuery({
        queryFn: () => getPlantById(plantId), // Fonction de fetch pour récupérer l'utilisateur par ID
        queryKey: ["plantById", plantId], // Utilise l'ID de l'utilisateur pour la clef de cache
        staleTime: 1000 * 60 * 5, // Garde les données valides pendant 5 minutes
        refetchOnWindowFocus: false, // Empêche le refetch automatique quand on revient sur la page
        refetchOnMount: false, // Empêche un refetch automatique au montage si les données existent déjà
    });
}

export function usePlantsByUserId(userId: number) {
    return useQuery({
        queryFn: () => getPlantsByUserId(userId), // Fonction de fetch pour récupérer l'utilisateur par ID
        queryKey: ["plantsByUserId", userId], // Utilise l'ID de l'utilisateur pour la clef de cache
        staleTime: 1000 * 60 * 5, // Garde les données valides pendant 5 minutes
        refetchOnWindowFocus: false, // Empêche le refetch automatique quand on revient sur la page
        refetchOnMount: false, // Empêche un refetch automatique au montage si les données existent déjà
    });
}