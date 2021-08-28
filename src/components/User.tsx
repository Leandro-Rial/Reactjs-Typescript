import { useState } from 'react';

interface Users {
    uid: string;
    name: string;
}

const User = () => {

    const [user, setUser] = useState<Users>();

    const login = () => {
        setUser({
            uid: '123asd',
            name: "Leandro"
        });
    }

    return (
        <div className="mt-5">
            <h3>Usuario</h3>

            <button className="btn btn-outline-primary" onClick={login}>Login</button>

            {
                !user
                ? <pre>No users</pre>
                : <pre>{JSON.stringify(user)}</pre>

            }
        </div>
    )
}

export default User
