import Dropdown from 'react-bootstrap/Dropdown';

export function OriginDestination() {
    //add method to retrieve stations list from backend
    const ex_stations = [
        { name: "Dublin" },
        { name: "Pleasanton" },
        { name: "Fremont"},
    ];

    return (
        <div class="OriginDestination">
            <Dropdown id="origin">
                <Dropdown.Toggle variant="success" id="dropdown-origin">
                    Origin
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {ex_stations.map((station) => (
                        <Dropdown.Item key={station.name}>{station.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown id="destination">
                <Dropdown.Toggle variant="success" id="dropdown-destination">
                    Destination
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {ex_stations.map((station) => (
                        <Dropdown.Item key={station.name}>{station.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <button name="getFare" onClick={getFare()}>GET FARE</button>
        </div>
    );
}

function getFare() {
    
}