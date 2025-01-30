import { useQuery } from "@tanstack/react-query";
import { getPlantById, getPlants, getPlantsByUserId } from "@api/plants";
import { getUserById } from "@api/users";

export function usePlants() {
    return useQuery({
        queryFn: getPlants,
        queryKey: ["plants"],
        staleTime: 1000 * 60 * 5, //5min avant de refetch automatiquement
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
}

export function useUserById(userId: number) {
    return useQuery({
        queryFn: () => getUserById(userId),
        queryKey: ["userById", userId],
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
}

export function usePlantById(plantId: number) {
    return useQuery({
        queryFn: () => getPlantById(plantId),
        queryKey: ["plantById", plantId],
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
}

export function usePlantsByUserId(userId: number) {
    return useQuery({
        queryFn: () => getPlantsByUserId(userId),
        queryKey: ["plantsByUserId", userId],
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
}