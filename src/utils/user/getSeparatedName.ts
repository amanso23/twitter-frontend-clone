export const getSeparatedName = (name: string) => {
    return name.replace(/([a-z])([A-Z])/g, '$1 $2'); //buscamos el lugar en la cadena donde haya una letra minúscula seguida de una mayúscula, y creamos un espacio entre ellas
}

