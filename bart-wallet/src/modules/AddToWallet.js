import { useState } from "react";

export function AddToWallet() {
    const [funds, setFunds] = useState(0.00);

    return (
        <div className="AddToWallet">
            <form onSubmit={addFunds({ funds })}>
                <div className="textboxes">
                    <h2 className="header">Enter funds to add:</h2>
                    <input type="number" onChange={ (event) => setFunds(event.target.value) }
                        placeholder={0.00} />
                </div>
                <div className="button">
                    <button>ADD FUNDS</button>
                </div>
            </form>
        </div>
    );
}

function addFunds(props) {
    if (props.funds === 0) {
        alert("Please select a non-zero amount");
    } else {
        //add funds to wallet via backend
    }
}