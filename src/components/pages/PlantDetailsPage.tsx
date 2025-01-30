import { useParams, useNavigate } from "react-router-dom";
import { usePlantById } from "@hooks/queries";
import { Plant } from "@templates/Plant/Plant";

export const PlantDetailsPage: React.FC = () => {
    const { id: idAsString } = useParams<{ id: string }>();
    const id = Number(idAsString);

    const navigate = useNavigate();

    if (isNaN(id)) {
        navigate("/");
        return null;
    }

    const { data: plant, isFetching, isError, error } = usePlantById(id);

    if (isFetching) return <p>Ça charge, reste tranquille...</p>;

    if (isError) {
        console.error(String(error));
        navigate("/");
        return null;
    }

    if (!plant) {
        navigate("/");
        return null;
    }

    return <Plant plant={plant} />;
};
