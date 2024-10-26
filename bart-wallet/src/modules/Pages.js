//serves as a link bar to various pages (login/signup, get ticket, etc.)

import { Link } from "react-router-dom";

//see linkedin lecture Ch 7 project for reference
export function Pages() {
    return (
        <div className="navigation">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/stations">Stations</Link>
                <Link to="/fare">Fare</Link>
                <Link to="/tickets">Tickets</Link>
            </nav>
        </div>
    );
}

//function that changes visibility/accessibility of Fare and Tickets depending on login status