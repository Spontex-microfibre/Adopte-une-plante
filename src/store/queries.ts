import { useQuery } from "@tanstack/react-query";
import { getPlants } from "@api/plants";
import { getUsers } from "@api/users";

export function usePlants() {
    return useQuery({
        queryFn: getPlants, // fonction de fetch à executer pour la query
        queryKey: ["plants"] // on attribue un identifiant UNIQUE à cette req pour l'invalider + tard si besoin
    })
}

export function useUsers() {
    return useQuery({
        queryFn: getUsers, // fonction de fetch à executer pour la query
        queryKey: ["users"] // on attribue un identifiant UNIQUE à cette req pour l'invalider + tard si besoin
    })
}