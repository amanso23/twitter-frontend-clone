import { User } from "./user.types";

export const updateUsersSection = (user: User, isFollowed: boolean, sectionName: string) => {
    const usersSection: User[] = JSON.parse(localStorage.getItem(sectionName) || "[]");

    const updatedUsers = usersSection.map(userS => {
        if (userS.id.value === user.id.value) {
            return { ...userS, isFollowed: !isFollowed }
        }
        return userS
    })


    localStorage.setItem(sectionName, JSON.stringify(updatedUsers))
}