export function FareSelect(props) {
    //creates series of radio buttons for different fare types, and a button to pay for the ticket.
    if (props.fares != null) {
        return (
            <div id="FareSelect">
                <div id="radio">
                    {props.fares.map((fare) => (
                        <input type="radio" value={fare.price} name={fare.type} />
                    ))}
                </div>
                { loginCheck }
            </div>
        );
    } else {
        return;
    }
}

function addTicket() {

}

function loginCheck() {
    if (localStorage.getItem("Id") === null || localStorage.getItem("Username") === null) {
        return (
            <p>You must log in to purchase a ticket.</p>
        );
    } else {
        return (
            <div id="button" onClick={addTicket}>
                PURCHASE TICKET
            </div>
        );
    }
}