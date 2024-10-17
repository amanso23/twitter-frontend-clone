import { UserWithPost } from "./user.types";

export const getUsersFromLocalStorage = (sectionName: string): UserWithPost[] => {
    return JSON.parse(localStorage.getItem(sectionName) || "[]");
}