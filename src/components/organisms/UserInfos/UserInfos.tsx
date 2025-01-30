import { Avatar, Button, Input } from "@atoms/index";
import { IUserInfosProps } from "./UserInfos.props";
import { useEffect, useState } from "react";
import "./UserInfos.css"
import { useUpdateUser } from "@hooks/mutations";

//Un même composant est utilisé pour l'affichage et la modification d'un utilisateur
//Dans les deux cas, j'utilise des imput, mais je les disable et cache les boutons d'intéraction si je n'ai pas les droits de modif (prop : canEdit)
export const UserInfos: React.FC<IUserInfosProps> = ({ user: initUserData, canEdit }) => {

    const [user, setUser] = useState(initUserData)

    const { firstname, lastname, age, avatar, location } = user

    const [isEditingUserData, setIsEditingUserData] = useState<boolean>(false)

    const { mutate: updateUser, } = useUpdateUser()

    //Si mes initalData change, je recharge le contenu de mes données d'utilisateur courant
    //Sinon, en passant d'un utilisateur à un autre, le composant ne re-render pas
    //      parce qu'il rend les données du useState, pas celles des props
    useEffect(() => {
        setUser(initUserData)
    }, [initUserData])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, })
    }

    return (
        <div className="userinfos-layout">
            <Avatar imageUrl={avatar} altText="Avatar" size="large" />
            <Input
                name="firstname"
                value={firstname}
                onChange={handleChange}
                placeholder="Prénom"
                disabled={!isEditingUserData}
            />
            <Input
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder="Nom"
                disabled={!isEditingUserData}
            />
            <Input
                name="age"
                type="number"
                value={age}
                onChange={handleChange}
                placeholder="Age"
                disabled={!isEditingUserData}
            />
            <Input
                name="location"
                type="location"
                value={location}
                onChange={handleChange}
                placeholder="Localisation"
                disabled={!isEditingUserData}
            />
            {isEditingUserData
                ?
                <>
                    <Button
                        label="Annuler"
                        onClick={() => {
                            setUser(initUserData)
                            setIsEditingUserData(false)
                        }}
                    />
                    <Button
                        label="Sauvegarder"
                        onClick={() => {
                            updateUser(user)
                            setIsEditingUserData(false)
                        }}
                    />
                </>
                : canEdit && <Button
                    label="Editer"
                    onClick={() => {
                        setIsEditingUserData(true)
                    }}
                />

            }
        </div>
    )
}