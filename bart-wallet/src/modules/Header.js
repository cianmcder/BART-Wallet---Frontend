import { Link } from "react-router-dom";

export function Header(props) {
    return (
        <div>
            <div id="login">
                { LoggedIn() }
            </div>
            <div id="header">
                <h1>BART Wallet React Project</h1>
                <h2 id="title">{ props.title }</h2>
            </div>
        </div>
    );
}

//function that changes appearance/functionality of "login" depending on whether logged in or not
function LoggedIn() {
    if (localStorage.getItem("Id") === null || localStorage.getItem("Username") === null) {
        return (
            <nav>
                <Link to="/login">Login</Link>
            </nav>
        );
    } else {
        return (
            <>
                <p>Hi { localStorage.getItem("Username") }!</p>
                <nav>
                    <Link onClick={ logout() }>Logout</Link>
                </nav>
            </>
        );
    }
}

function logout() {
    localStorage.clear();
}