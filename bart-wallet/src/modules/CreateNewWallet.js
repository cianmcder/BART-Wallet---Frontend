import { useState } from "react";

//see Ch05
export function CreateNewWallet() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="NewWallet">
            <form onSubmit={create}>
                <div className="textboxes">
                    <h2 className="header">Create New Wallet</h2>
                    <p>Username</p>
                    <input value={username}
                        onChange={(event) =>
                            setUsername(event.target.value)
                        }
                        type="text"
                        placeholder="Username"
                    />
                    <p>Password</p>
                    <input value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                        type="text"
                        placeholder="Password"
                    />
                </div>
                <div className="button">
                    <button>CREATE WALLET</button>
                </div>
            </form>
        </div>
    );
}

//send info to backend, create new wallet
function create() {

}