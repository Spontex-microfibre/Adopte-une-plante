import { PlantsList } from "@organisms/PlantsList";
import { IPlantsProps } from "./Plants.props";
import "./Plants.css"

export const Plants: React.FC<IPlantsProps> = ({plants}) => {

    return (
        <main className="plants-layout">
            <h1>Une plante vous intéresse ?</h1>
            <p>Cliquez dessus pour en savoir d'avantage !</p>
            <PlantsList plants={plants} />
        </main>
    )
}