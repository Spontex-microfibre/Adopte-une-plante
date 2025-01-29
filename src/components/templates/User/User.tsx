import { Avatar, Button, Input } from "@atoms/index";
import { IUserProps } from "./User.props";
import { useState } from "react";
import { PlantsList } from "@organisms/PlantsList";

export const User: React.FC<IUserProps> = ({ user: initUserData, canEdit, plants }) => {


    const [user, setUser] = useState(initUserData)
    const { firstname, lastname, age, avatar, location } = user

    const [isEditingUserData, setIsEditingUserData] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    }

    return (
        <main>
            {/* à gauche, section visualisation du profil*/}
            <div>
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
                                console.log("todo : call api put user")
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
                <Avatar imageUrl={avatar} altText="Avatar" />
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
            </div>
            {/* à droite, section visualisation des plantes*/}
            <div>
                <PlantsList plants={plants} />
            </div>
        </main>
    )
}