import { User } from "@templates/User";
import { usePlantsByUserId, useUserById } from "@hooks/queries";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@store/useAuth";

export const UserDetailsPage: React.FC = () => {
    const {id} = useParams<string>()
    const {userId: currentLoggedUserId} = useAuth()

    const [editModeEnabled, setEditModeEnabled] = useState<boolean>(false)

    // Récupère les données de l'utilisateur
    const { data: user, isLoading: isUserLoading, isError: isUserError, error: userError } = useUserById(Number(id));
    
    // Récupère les plantes de l'utilisateur
    const { data: plants, isLoading: isPlantsLoading, isError: isPlantsError, error: plantsError } = usePlantsByUserId(Number(id));

    useEffect(() => {
        setEditModeEnabled(currentLoggedUserId == Number(id))
    }, [currentLoggedUserId, id])

    // Gestion des erreurs utilisateur
    if (isUserError) {
        console.error(String(userError));
        return <p>Erreur lors du chargement de l'utilisateur</p>;
    }

    // Gestion des erreurs des plantes
    if (isPlantsError) {
        console.error(String(plantsError));
        return <p>Erreur lors du chargement des plantes</p>;
    }

    // Chargement des données utilisateur et des plantes
    if (isUserLoading || isPlantsLoading) {
        return <p>Ça charge...</p>;
    }

    // Rendu du composant User une fois que toutes les données sont récupérées
    return (
        user && plants && (
            <User user={user} plants={plants} canEdit={editModeEnabled} />
        )
    );
};
