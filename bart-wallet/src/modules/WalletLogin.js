import { useState } from "react";

//see Ch05
export function WalletLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div id="walletLogin">
            <form onSubmit={login}>
                <div id="textboxes">
                    <h2 id="header">Enter Login Credentials: </h2>
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
                <div id="button">
                    <button>LOGIN</button>
                </div>
            </form>
        </div>
    );
}

//send info to backend, login
function login() {

}