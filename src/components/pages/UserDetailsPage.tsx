import { User } from "@templates/User";
import { usePlantsByUserId, useUserById } from "@hooks/queries";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@store/useAuth";
import { Loader } from "@atoms/Loader";

export const UserDetailsPage: React.FC = () => {

    const id = Number(useParams<{ id: string }>().id ?? 0)

    const {userId: currentLoggedUserId} = useAuth()

    const navigate = useNavigate()

    const [editModeEnabled, setEditModeEnabled] = useState<boolean>(false)

    // Récupère les données de l'utilisateur
    const { data: user, isLoading: isUserLoading, isError: isUserError, error: userError } = useUserById(id);
    
    // Récupère les plantes de l'utilisateur
    const { data: plants, isLoading: isPlantsLoading, isError: isPlantsError, error: plantsError } = usePlantsByUserId(id);

    //Si l'id de l'user que je consulte correspond à l'id de l'utilisateur actuellement connecté, je lui donne des droits d'éditions
    useEffect(() => {
        setEditModeEnabled(currentLoggedUserId == id)
    }, [currentLoggedUserId, id])

    if (isUserError) {
        console.error(String(userError))
        navigate("/")
        return null //stopper immédiatement le rendu du composant, parce qu'il ne sera pas affiché dans tout les cas et react continue de le rendre
    }

    if (isPlantsError) {
        console.error(String(plantsError))
        navigate("/")
        return null //stopper immédiatement le rendu du composant, parce qu'il ne sera pas affiché dans tout les cas et react continue de le rendre
    }

    if (isUserLoading || isPlantsLoading) {
        return <Loader loading paddingTop="200px"/>
    }

    return (
        user && plants && (
            <User user={user} plants={plants} canEdit={editModeEnabled} />
        )
    );
};
