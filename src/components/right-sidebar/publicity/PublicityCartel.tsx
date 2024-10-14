import Button from "../../comun/Button"

const PublicityCartel = () => {
    return (
        <div className="border-[0.5px] border-[#2f3336] bg-[url(https://abs.twimg.com/images/premium_shiny_background.png)] bg-cover m-6 rounded-2xl flex flex-col gap-y-2 text-left p-4">
                <h1 className="text-xl font-extrabold">¡Caduca pronto!</h1>
                <p className="text-wrap w-11/12 font-medium">Obtén hasta un 40% de descuento en X Premiun</p>
                <Button 
                    content="Más información"
                    className="px-3 py-1.5 text-black font-bold bg-white rounded-full max-w-40 transition-colors duration-300 hover:bg-[#d7dbdc]"
                />
        </div>
    )
}

export default PublicityCartel