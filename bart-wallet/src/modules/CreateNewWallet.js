import { useState } from "react";

//see Ch05
export function CreateNewWallet() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="NewWallet">
            <form onSubmit={create}>
                <p className="header">Create New Wallet</p>
                <input value={username}
                    onChange={(event) =>
                        setUsername(event.target.value)
                    }
                    type="text"
                    placeholder="Username"
                />
                <input value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                    type="text"
                    placeholder="Password"
                />
                <button>CREATE WALLET</button>
            </form>
        </div>
    );
}

//send info to backend, create new wallet
function create() {

}