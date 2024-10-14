import { ReactNode } from "react"
import SideBar from "../components/sidebar/SideBar"

interface Props {
    children: ReactNode
}
const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className="grid grid-cols-[75px,1fr] lg:grid-cols-[100px,1fr] xl:grid-cols-[290px,1fr] max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto min-h-screen">
            <SideBar />
            <div className="grid grid-cols-1 xl:grid-cols-[1fr,400px] ">
                {children}
            </div>
        </div>
    )
}

export default Layout