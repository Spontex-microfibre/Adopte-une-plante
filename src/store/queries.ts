import { useQuery } from "@tanstack/react-query";
import { getPlants } from "@api/plants";

export function usePlants() {
    return useQuery({
        queryFn: getPlants, // fonction de fetch à executer pour la query
        queryKey: ["plants"] // on attribue un identifiant UNIQUE à cette req pour l'invalider + tard si besoin
    })
}