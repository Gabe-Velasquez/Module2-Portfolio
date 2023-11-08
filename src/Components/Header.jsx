import Nav from "./Nav";

export default function Header(){
    return(
        <header className="header-info">
            <div className="header-wrapper">
                <h1>Gabe Velasquez</h1>
                <p>Software Developer</p>
            </div>
            <Nav />
        </header>
    )
}