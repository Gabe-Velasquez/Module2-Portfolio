const Button = ({children, className="", outline, link, self})=>{
    return(
        <a
            href={link}
            className={`${outline ? "button-outline" : "button"} ${className}`}
            target={`${self ? "_self" : "_blank"}`}>
            {children}
        </a>
    )
}

export default Button;