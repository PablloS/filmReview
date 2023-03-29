import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <h2 className="header-title">KinoReview</h2>
            </Link>

        </header>
    )
}