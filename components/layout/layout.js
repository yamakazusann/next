import Navigation from "./navigation"

export default function Layout(props){
    return(
        <div className="">
            <Navigation />
            <main className="">
                {props.children}
            </main>
            <footer className="footer">
                <ul className="horizontal-list">
                <li className="horizontal-item"><a href="#">ABOUT ME</a></li>
                <li className="horizontal-item"><a href="#">SITE MAP</a></li>
                <li className="horizontal-item"><a href="#">SNS</a></li>
                <li className="horizontal-item"><a href="#">CONTACT</a></li>
                </ul>
                <p className="copyright">Copyright ©︎ 2015 SAMPLE SITE</p>
            </footer>
        </div>
    )
}