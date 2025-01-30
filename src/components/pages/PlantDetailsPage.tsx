import { useParams, useNavigate } from "react-router-dom";
import { usePlantById } from "@hooks/queries";
import { Plant } from "@templates/Plant/Plant";
import { IPlant } from "types/plant";

export const PlantDetailsPage: React.FC = () => {
    const { id: idAsString } = useParams<{ id: string }>();
    const id = Number(idAsString);

    const navigate = useNavigate();


    const { data: plant, isFetching, isError, error } = usePlantById(id);

    if (isError) {
        console.error(String(error));
        navigate("/");
        return null;
    }

    return <Plant plant={plant ?? {} as IPlant} isFetching={isFetching}/>;
};
