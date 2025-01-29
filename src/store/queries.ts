import { useQuery } from "@tanstack/react-query";
import { getPlants } from "@api/plants";

export function usePlants() {
    return useQuery({
        queryFn: getPlants, // fonction de fetch à executer pour la query
        queryKey: ["plants"], // on attribue un identifiant UNIQUE à cette req pour l'invalider + tard si besoin
        staleTime: 1000 * 60 * 5, // Garde les données valides pendant 5 minutes
        refetchOnWindowFocus: false, // Empêche le refetch automatique quand on revient sur la page
        refetchOnMount: false, // Empêche un refetch automatique au montage si les données existent déjà
    })
}