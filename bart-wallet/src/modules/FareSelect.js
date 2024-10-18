export function FareSelect(props) {
    //creates series of radio buttons for different fare types, and a button to pay for the ticket.
    if (props.fares != null) {
        return (
            <div className="FareSelect">
                <div className="radio">
                    {props.fares.map((fare) => (
                        <input type="radio" value={fare.price} name={fare.type} />
                    ))}
                </div>
                <div className="button" onClick={addTicket}>
                    PURCHASE TICKET
                </div>
            </div>
        );
    } else {
        return;
    }
}

function addTicket() {

}