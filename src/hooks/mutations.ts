import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@api/users";
import { IUser } from "types/user";
import { deletePlant } from "@api/plants";
import { IPlant } from "types/plant";

//Quand j'update un utilisateur, j'enlève du cache les anciennes data, et je récupère les nouvelles
export function useUpdateUser() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateUser,
        onSuccess: (updatedUser: IUser) => {
            const userId = Number(updatedUser.id)
            queryClient.invalidateQueries({ queryKey: ["userById", userId] })
        }
    })
}

//Lorsque je supprime une plante, je veux enlever du cache les requête qui permettre de fetch les plantes, pour qu'elle se "remettent au goût du jour"
export function useDeletePlant() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deletePlant,
        onSuccess: (deletedPlant: IPlant) => {
            const plantId = deletedPlant.id
            queryClient.invalidateQueries({ queryKey: ["plantById", plantId] })
            queryClient.invalidateQueries({ queryKey: ["plants"] })
            queryClient.invalidateQueries({ queryKey: ["plantsByUserId", Number(deletedPlant.userId)] })
        }
    })
}