import { useRef } from "react";

export function AddToWallet() {
    const funds = useRef(0.00);

    return (
        <div id="AddToWallet">
            <form onSubmit={addFunds(() => {
                const f = funds.current.value;
                addFunds({ f });
            })}>
                <div id="textboxes">
                    <h2 id="header">Enter funds to add:</h2>
                    <input type="number" ref={funds} />
                </div>
                <div id="button">
                    { loginCheck() }
                </div>
            </form>
        </div>
    );
}

function addFunds(props) {
    if (props.funds <= 0) {
        alert("Please select a non-zero amount");
    } else {
        //add funds to wallet via backend
    }
}

function loginCheck() {
    if (localStorage.getItem("Id") === null || localStorage.getItem("Username") === null) {
        return (
            <p>You must log in to add funds to a wallet.</p>
        );
    } else {
        return (
            <button>ADD FUNDS</button>
        );
    }
}