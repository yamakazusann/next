import Link from "next/link"

export default function Navigation(){
    return(
        <header className="header">
            <h1 className="logo">
                <a href="/">SAMPLE SITE</a>
            </h1>
            <nav className="global-nav">
                <ul>
                    <li className="nav-item active"><a href="#">HOME</a></li>
                    <li className="nav-item"><a href="#">ABOUT</a></li>
                    <li className="nav-item"><a href="#">NEWS</a></li>
                    <li className="nav-item"><a href="#">TOPICS</a></li>
                    <li className="nav-item"><a href="#">DOCS</a></li>
                    <li className="nav-item"><a href="#">BLOG</a></li>
                </ul>
            </nav>
        </header>
    )
}