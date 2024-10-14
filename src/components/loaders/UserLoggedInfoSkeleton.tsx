const UserLoggedInfoSkeleton = () => {
    return (
        <section className="flex items-center justify-center xl:justify-between pointer-events-none mb-6 mr-6">
                    <aside className="flex items-center gap-x-2">
                        
                            <span className="h-12 w-12 rounded-full bg-[#1b1b1b] animate-pulse"></span>
                        
                        <div className="flex-col gap-y-3 text-left hidden xl:flex ">
                            <span className="h-3 w-24 bg-[#1b1b1b]  animate-pulse "></span>
                            <p className="h-3 w-32 bg-[#1b1b1b]  animate-pulse"></p>
                        </div>
                    </aside>
                    <span className="h-2 w-6 bg-[#1b1b1b]  animate-pulse"></span>
            </section>
    )
}

export default UserLoggedInfoSkeleton