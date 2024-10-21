import Main from "../components/main/Main"
import PublicityCartel from "../components/right-sidebar/publicity/PublicityCartel"
import RightSideBar from "../components/right-sidebar/RightSideBar"


const Home = () => {

    return(
        <>
            <Main />
            <RightSideBar children={<PublicityCartel />} sectionName="A quién seguir" />
        </>
    )
}

export default Home