interface Props {
    content: React.ReactNode
    className: string
    onClick?: () => void
    disabled?: boolean
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    

}

const Button: React.FC<Props> = ({content, className, onClick, disabled, onMouseEnter, onMouseLeave}) => {
    
    return (
        <button className={className} onClick={onClick} disabled={disabled} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {content}
        </button>
    )
}

export default Button