import { usePlants } from "@hooks/queries"
import { Plants } from "@templates/Plants/Plants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@store/useAuth";


export const PlantsPage: React.FC = () => {

    const { data: plants, isFetching, isError, error } = usePlants();

    const {userId: loggedUserId} = useAuth()

    const navigate = useNavigate();

    if(isError) {
        navigate("/")
        console.error(String(error))
    }

    return (
        <Plants plants={plants?.filter(plant => plant.userId != loggedUserId) || []} isFetching={isFetching}/>
    )
}