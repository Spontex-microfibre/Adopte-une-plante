import { PlantsList } from "@organisms/PlantsList";
import { IPlantsProps } from "./Plants.props";
import "./Plants.css"
import { Loader } from "@atoms/Loader";

export const Plants: React.FC<IPlantsProps> = ({ plants, isFetching }) => {

    return (
        <main className="plants-layout">
            <h1>Une plante vous intéresse ?</h1>
            <p>Cliquez dessus pour en savoir d'avantage !</p>
            {isFetching
                ? <Loader paddingTop={"100px"} loading={isFetching} />
                : <PlantsList plants={plants} />
            }
        </main>
    )
}