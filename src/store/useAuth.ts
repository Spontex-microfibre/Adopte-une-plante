import { create } from "zustand";

export interface IAuthState {
    userId: number | null;
    setUserId: (id: number) => void;
}

export const useAuth = create<IAuthState>((set) => ({
    userId: 1, // Valeur par défaut de l'userId (simulé)
    setUserId: (id: number) => set({ userId: id }),
}));