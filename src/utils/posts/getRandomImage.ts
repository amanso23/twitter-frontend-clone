export const getRandomImage = (randomImages: string[]): string => {
    const randomIndex = Math.floor(Math.random() * randomImages.length)
    return randomImages[randomIndex]
}