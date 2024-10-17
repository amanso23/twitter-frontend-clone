export const getRandomText = (randomTextArray: string[]) => {
    const randomIndex = Math.floor(Math.random() * randomTextArray.length)
    return randomTextArray[randomIndex]
}
