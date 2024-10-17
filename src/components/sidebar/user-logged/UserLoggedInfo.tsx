import { OptionsSVG, VerifiedSVG } from "../../icons"

const UserLoggedInfo = () => {



    return (
        <div>
            <section className="flex items-center justify-center xl:justify-between transition-colors rounded-full duration-200 hover:bg-[#181818] mb-4 mr-2 xl:p-3 cursor-pointer">
                <aside className="flex items-center gap-x-2">
                    <picture>
                        <img
                            src="https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png?s=200"
                            alt="mask-picture"
                            className="size-12 rounded-full"
                        />
                    </picture>
                    <div className="flex-col text-left hidden xl:flex ">
                        <div className="flex items-center gap-x-1">
                            <p className=" font-bold ">Elon Musk</p>
                            <VerifiedSVG className="fill-[#1d9bf0] size-5 mt-[2px]" />
                        </div>
                        <p className="opacity-60">@elonmusk</p>
                    </div>
                </aside>
                <OptionsSVG className="size-4 xl:size-5 hidden xl:flex " />
            </section>
        </div>

    )
}

export default UserLoggedInfo