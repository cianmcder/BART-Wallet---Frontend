import { useRef } from "react";
import { FareSelect } from "./FareSelect";

export function OriginDestination() {
    //add method to retrieve stations list from backend
    const ex_stations = [
        { name: "Dublin", abbrev: "dbln" },
        { name: "Pleasanton", abbrev: "plsn" },
        { name: "Fremont", abbrev: "frmt"},
    ];

    const origin = useRef();
    const destination = useRef();

    return (
        <div id="OriginDestination">
            <form id="dropdown-form" onSubmit={() => {
                const ori = origin.current.value;
                const des = destination.current.value;
                getFare({ ori, des });
            }}>
                <div id="dropdown">
                    <select id="origin" title="origin" ref={origin} defaultValue="default">
                        <option value="default" key="origin-default">Origin</option>
                        {ex_stations.map((station) => (
                            <option value={station.abbrev} key={station.abbrev}>{station.name}</option>
                        ))}
                    </select>
                    <select id="destination" title="destination" ref={destination} defaultValue="default">
                        <option value="default" key="destination-default">Destination</option>
                        {ex_stations.map((station) => (
                            <option value={station.abbrev} key={station.abbrev}>{station.name}</option>
                        ))}
                    </select>
                </div>
                <div id="button">
                    <button name="getFare">GET FARE</button>
                </div>
            </form>
        </div>
    );
}

function getFare(props) {
    if (props.ori === "default") {
        alert("No origin station specified");
    } else if (props.des === "default") {
        alert("No destination station specified");
    } else if (props.ori === props.des) {
        alert(`Origin and destination are the same station: ORIGIN = ${props.ori}, DESTINATION = ${props.des}`);
    } else {
        //pull fare info from backend

        //create FareSelect module based on returned info?
        return <FareSelect fares={ null } origin={ props.ori } destination={ props.des } />;
        //or create new page for the purpose of purchasing tickets?
    }
}