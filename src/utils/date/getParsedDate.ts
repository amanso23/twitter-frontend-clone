const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

export const getParsedDobDate = (date: string) => {
    const dateAux = new Date(date)

    const month = parseInt(('0' + (dateAux.getUTCMonth())).slice(-2))
    const day = ("" + dateAux.getUTCDate()).slice(-2)

    return `${day} de ${months[month]}`



}

export const getParsedRegisteredDate = (date: string) => {
    const dateAux = new Date(date)

    const month = parseInt(('0' + (dateAux.getUTCMonth())).slice(-2))
    const year = dateAux.getFullYear()
    

    return `${months[month]} de ${year}`

}