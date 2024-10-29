export function StationsList(props) {
    //example station list until code to retrieve backend implemented
    //see fetch() from Ch06
    const ex_stations = [
        { name: "Dublin" },
        { name: "Pleasanton" },
        { name: "Fremont"},
    ];

    return (
        <div id="stationsList">
            <ul id="list">
                {//props.stations.map((station) => (
                ex_stations.map((station) => (
                    <li key={station.name}>{station.name}</li>
                ))}
            </ul>
        </div>
    );
}