import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="menu">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">logout </Link></li>
                </ul>
            </div>

        </>
    )
}

export { Header }