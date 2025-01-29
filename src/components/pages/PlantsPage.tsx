import { usePlants } from "@hooks/queries"
import { Plants } from "@templates/Plants/Plants";
import { useNavigate } from "react-router-dom";

export const PlantsPage: React.FC = () => {

    const { data, isFetching, isError, error } = usePlants();

    const navigate = useNavigate();

    if(isFetching) return <p>ça charge</p>

    if(isError) {
        navigate("/")
        console.error(String(error))
    }

    return (
        <Plants plants={data || []}/>
    )
}