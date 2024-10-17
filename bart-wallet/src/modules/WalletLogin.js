import { useState } from "react";

//see Ch05
export function WalletLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="walletLogin">
            <form onSubmit={login}>
                <p className="header">Enter Login Credentials: </p>
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
                <button>LOGIN</button>
            </form>
        </div>
    );
}

//send info to backend, login
function login() {

}