import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@api/users";
import { IUser } from "types/user";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateUser,
        // onSuccess: () => {
        //     queryClient.invalidateQueries({ queryKey: ["todos"] })
        // }
        onSuccess: (updatedUser: IUser) => {
            const userId = updatedUser.id
            const previousUsers = queryClient.getQueryData(["userById", userId]) as any;
            queryClient.setQueryData(
                ["userById", userId],
                previousUsers?.map((previousUser: IUser) => 
                    previousUser.id === userId ? { ...previousUser, ...updatedUser } : previousUser
                )
            );
        }
    })
}