import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePlants } from "@store/queries";
import { Plant } from "@templates/Plant/Plant";

export const PlantPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data: plants, isFetching, isError, error } = usePlants();

    useEffect(() => {
        if (isError) {
            console.error(String(error));
            navigate("/");
        }
    }, [isError, error, navigate]);

    if (isFetching) return <p>Ça charge, reste tranquille...</p>;

    const plant = plants?.find((plant) => plant.id == Number(id));

    useEffect(() => {
        if (!plant) {
            navigate("/");
        }
    }, [plant, navigate]);

    if (!plant) return null;

    return <Plant plant={plant} />;
};
