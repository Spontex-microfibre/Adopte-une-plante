import { usePlants } from "@store/queries"
import { PlantsList } from "@organisms/PlantsList";

export const Plants: React.FC = () => {

    const { data, isFetching, isError, error } = usePlants();

    if(isFetching) return <p>ça charge</p>

    if(isError) return <p>{error.message}</p>

    return (
        <main className="page-layout">
            <h1>Une plante vous intéresse ?</h1>
            <p>Cliquez dessus pour en savoir d'avantage !</p>
            <PlantsList plants={data ?? []} />
        </main>
    )
}