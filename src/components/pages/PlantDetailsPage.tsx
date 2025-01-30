import { useParams, useNavigate } from "react-router-dom";
import { usePlantById } from "@hooks/queries";
import { Plant } from "@templates/Plant/Plant";
import { IPlant } from "types/plant";

export const PlantDetailsPage: React.FC = () => {

    const id = Number(useParams<{ id: string }>().id ?? 0)

    const navigate = useNavigate()

    const { data: plant, isFetching, isError, error } = usePlantById(id)

    if (isError) {
        console.error(String(error))
        navigate("/")
        return null //stopper immédiatement le rendu du composant, parce qu'il ne sera pas affiché dans tout les cas et react continue de le rendre
    }

    //cast d'un {} as IPlant, parce que le composant n'accepte pas un potentiel undefined, bizarre mais j'ai trouvé que ça
    return <Plant plant={plant ?? {} as IPlant} isFetching={isFetching}/>
};
