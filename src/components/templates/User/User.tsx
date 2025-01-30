import { IUserProps } from "./User.props";
import { PlantsList } from "@organisms/PlantsList";
import { UserInfos } from "@organisms/UserInfos";
import "./User.css"

export const User: React.FC<IUserProps> = ({ user: initUserData, canEdit, plants }) => {

    return (
        <main className="user-layout">
            <div className="user-informations">
                <UserInfos user={initUserData} canEdit={canEdit}/>
            </div>
            <div className="user-plants">
                <PlantsList plants={plants} canEdit={canEdit}/>
            </div>
        </main>
    )
}