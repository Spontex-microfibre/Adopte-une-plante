import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@api/users";
import { IUser } from "types/user";
import { deletePlant } from "@api/plants";
import { IPlant } from "types/plant";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateUser,
        // onSuccess: () => {
        //     queryClient.invalidateQueries({ queryKey: ["todos"] })
        // }
        onSuccess: (updatedUser: IUser) => {
            const userId = updatedUser.id
            const previousUsers = queryClient.getQueryData(["userById", userId]) as IUser[];
            queryClient.setQueryData(
                ["userById", userId],
                previousUsers?.map((previousUser) => 
                    previousUser.id === userId ? { ...previousUser, ...updatedUser } : previousUser
                )
            );
        }
    })
}

export function useDeletePlant() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deletePlant,
        onSuccess: (deletedPlant: IPlant) => {
            const plantId = deletedPlant.id
            queryClient.invalidateQueries({ queryKey: ["plantById", plantId] });
            queryClient.invalidateQueries({ queryKey: ["plants"] });
            queryClient.invalidateQueries({ queryKey: ["plantsByUserId", Number(deletedPlant.userId)] });
        }
    })
}