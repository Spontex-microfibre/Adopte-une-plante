import { usePlants } from "@store/queries"
import { PlantCard } from "@molecules/PlantCard";

export const Home: React.FC = () => {

    const { data, isFetching, isError, error } = usePlants();

    if(isFetching) return <p>ça charge</p>

    if(isError) return <p>{error.message}</p>

    return (
        <>
            {data && data.map( (plant) => {
                return <PlantCard plant={plant} />
            })}
        </>
    )
}