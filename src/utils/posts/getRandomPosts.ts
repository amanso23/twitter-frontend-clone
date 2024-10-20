export const getRandomPosts = async<T extends object>(count: number, getPost: () => Promise<T>): Promise<T[]> => {
    const randomPosts: T[] = []
    for(let i=0; i<count; i++){
        randomPosts.push(await getPost())
    }
    return randomPosts
}