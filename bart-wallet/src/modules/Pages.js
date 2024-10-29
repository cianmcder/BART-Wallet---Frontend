import { Link } from "react-router-dom";

export function Pages() {
    return (
        <div id="navigation">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/stations">Stations</Link>
                { loginCheck() }
            </nav>
        </div>
    );
}

//function that changes visibility/accessibility of Fare and Tickets depending on login status
function loginCheck() {
    if (localStorage.getItem("Id") === null || localStorage.getItem("Username") === null) {
        return;
    } else {
        return (
            <>
                <Link to="/fare">Fare</Link>
                <Link to="/tickets">Tickets</Link>
            </>
        );
    }
}