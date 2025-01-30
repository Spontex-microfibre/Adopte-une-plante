import { Avatar, Button, Input } from "@atoms/index";
import { IUserInfosProps } from "./UserInfos.props";
import { useEffect, useState } from "react";
import "./UserInfos.css"
import { useUpdateUser } from "@hooks/mutations";

export const UserInfos: React.FC<IUserInfosProps> = ({ user: initUserData, canEdit }) => {


    const [user, setUser] = useState(initUserData)

    const { firstname, lastname, age, avatar, location } = user

    const [isEditingUserData, setIsEditingUserData] = useState<boolean>(false)

    const { mutate: updateUser, } = useUpdateUser();

    useEffect(() => {
        setUser(initUserData);
    }, [initUserData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
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