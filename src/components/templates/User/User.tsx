import { IUserProps } from "./User.props";
import { PlantsList } from "@organisms/PlantsList";
import { UserInfos } from "@organisms/UserInfos";
import "./User.css"

export const User: React.FC<IUserProps> = ({ user: initUserData, canEdit, plants }) => {

    return (
        <main className="user-layout">
            {/* à gauche, section visualisation du profil*/}
            <div className="user-informations">
                <UserInfos user={initUserData} canEdit={canEdit}/>
            </div>
            {/* à droite, section visualisation des plantes*/}
            <div  className="user-plants">
                <PlantsList plants={plants} />
            </div>
        </main>
    )
}