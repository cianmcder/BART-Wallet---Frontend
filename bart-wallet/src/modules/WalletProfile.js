export function WalletProfile() {
    const id = localStorage.getItem("Id");
    //retrieve wallet from backend, return name and balance

    const name = "";
    const balance = 0.00;

    return (
        <div id="profile">
            <h1>{name}</h1>
            <p>Balance : {balance}</p>
        </div>
    );
}