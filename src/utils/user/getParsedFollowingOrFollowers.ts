export const getParsedNumber = (number: number): string => {
    // Manejo de números negativos
    if (number < 0) {
        return '0'; // O puedes devolver un mensaje específico si lo prefieres
    }
    
    if (number >= 1000 && number < 1000000) {
        return `${(number / 1000).toFixed(1)} mil`; // Ejemplo: 2500 -> "2.5k"
    } else if (number >= 1000000) {
        return `${(number / 1000000).toFixed(1)}M`; // Ejemplo: 2500000 -> "2.5M"
    }

    return number.toString(); // Para números menores de 1000
}