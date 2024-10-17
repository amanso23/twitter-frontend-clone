export const getRandomPosts = <T extends object>(count: number, getPost: () => T) => {
    const randomPosts: T[] = []
    for(let i=0; i<count; i++){
        randomPosts.push(getPost())
    }
    return randomPosts
}