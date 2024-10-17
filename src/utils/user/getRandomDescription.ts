const phrases = [
    "✨ Buscando la magia en cada día, cultivando momentos inolvidables y llenos de amor, mientras danzo entre sueños y realidades. ✨❤️",
        "🌍 Viajero del mundo, capturando momentos extraordinarios y descubriendo culturas vibrantes. Siempre listo para una nueva aventura. 📸✈️🌟",
        "🌈 Creando mi propio arcoíris con amor y risas, abrazando cada pequeño momento que ilumina mi camino y compartiendo felicidad. ❤️😄✨",
        "🎶 Melómano y soñador, siempre en busca de nuevas melodías que hablen al corazón y resuenen en el alma, creando bandas sonoras para la vida. 🎧🌌💖",
        "🐾 Aventurero en el corazón, equilibrando la exploración de la naturaleza con la ternura de los pequeños momentos, rodeado de amigos peludos. 🌲💖🐕",
        "🌟 Persiguiendo estrellas y sueños, un día a la vez, con la firme convicción de que cada meta alcanzada es solo el comienzo de una nueva aventura. 🌙💫✨",
        "☕ Amante del café y las buenas conversaciones, siempre listo para una charla profunda sobre la vida, el amor y todo lo que nos conecta. 🗨️📖❤️",
        "🌱 Apasionado por el crecimiento personal y las pequeñas cosas que hacen la vida especial, buscando siempre aprender y mejorar en este viaje. 🍀💪🌈",
        "🎨 Artista en el alma, expresando emociones a través de la creatividad y la belleza de la vida, pintando mis días con colores vibrantes. ✨🎭🖌️",
        "🚀 Explorador del cosmos y de la mente humana, siempre curioso y en búsqueda de conocimiento, disfrutando cada descubrimiento que ilumina mi camino. 🧠🔍🌌",
        "📚 Lector voraz de historias que nos transportan a otros mundos, creyendo firmemente que cada página es una nueva aventura esperando a ser vivida. 🌌📖✨",
        "🌸 La vida es un lienzo; cada día es una nueva pincelada de color que nos recuerda la belleza de lo efímero y lo extraordinario que nos rodea. 🎨🌺🌈",
        "💻 Innovador digital, creando conexiones y soluciones que nos ayudan a construir un futuro mejor, donde la tecnología y la humanidad se unen en armonía. 🌐✨🔗",
        "🏞️ Buscando la belleza en la naturaleza y la simplicidad de la vida, siempre dispuesto a dejarme llevar por el viento y la serenidad del momento. 🍃🌅🌈",
        "🌺 Conectando corazones a través de palabras y arte, compartiendo mis pensamientos y sentimientos en un viaje de autodescubrimiento y conexión. 💌✍️🎨"
]

export const getRandomDescription = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    return phrases[randomIndex];
}
