import { LoadingSVG } from "../icons"

const SpinLoader = () => {
    return(
        <span className="animate-spin-slow">
            <LoadingSVG />
        </span>
    )
}

export default SpinLoader