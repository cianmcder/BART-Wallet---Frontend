import { Link } from "react-router-dom";

export function Header() {
    return (
        <div>
            <div className="login">
                <nav>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
            <div className="header">
                <h1>BART Wallet React Project</h1>
                <h2>Page Title</h2>
            </div>
        </div>
    );
}

//create functions that changes appearance/functionality of "login" depending on whether logged in or not

//create function that changes page title based on page