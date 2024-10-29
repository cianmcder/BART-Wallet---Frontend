import { useState } from "react";

export function OriginDestination() {
    //add method to retrieve stations list from backend
    const ex_stations = [
        { name: "Dublin", abbrev: "dbln" },
        { name: "Pleasanton", abbrev: "plsn" },
        { name: "Fremont", abbrev: "frmt"},
    ];

    const [origin, setOrigin] = useState("default");
    const [destination, setDestination] = useState("default");

    //useEffect(() => getFare, []);

    return (
        <div id="OriginDestination">
            <div id="dropdown">
            <select id="origin" defaultValue="default" onChange={(event) => setOrigin(event.target.value)}>
                <option value="default" key="origin-default">Origin</option>
                {ex_stations.map((station) => (
                    <option value={station.abbrev} key={station.abbrev}>{station.name}</option>
                ))}
            </select>
            <select id="destination" defaultValue="default" onChange={(event) => setDestination(event.target.value)}>
                <option value="default" key="destination-default">Destination</option>
                {ex_stations.map((station) => (
                    <option value={station.abbrev} key={station.abbrev}>{station.name}</option>
                ))}
            </select>
            </div>
            <div id="button">
                <button name="getFare" onClick={getFare({ origin, destination })}>GET FARE</button>
            </div>
        </div>
    );
}

//dev note: for some reason, the function fires off twice when loaded in and whenever the dropdowns change value
// useState , []); ?
function getFare(props) {
    if (props.origin === "default") {
        alert("No origin station specified");
    } else if (props.destination === "default") {
        alert("No destination station specified");
    } else if (props.origin === props.destination) {
        alert("Origin and destination are the same station");
    } else {
        //pull fare info from backend
        //create FareSelect module based on returned info
    }
}