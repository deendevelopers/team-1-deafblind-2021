import './Signup.css';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const { signup, isPending, error } = useSignup()
    
    const handleSubmit = () => {
        e.preventDefault()
        signup(email, password, username)
    }

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label>
                <span>email:</span>
                <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </label>
            <label>
                <span>username:</span>
                <input
                required
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                />
            </label>
            {!isPending && <button className="btn">Sign up</button>}
            {isPending && <button className="btn" disabled>Loading...</button>}
            {error && <div className="error">{error}</div>}
        </form>
        )

}
