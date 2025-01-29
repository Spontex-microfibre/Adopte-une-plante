import { IAuthState } from "types/authState";
import { create } from "zustand";

export const useAuth = create<IAuthState>((set) => ({
    userId: 1, // Valeur par défaut de l'userId (simulé)
    setUserId: (id: number) => set({ userId: id }),
}));