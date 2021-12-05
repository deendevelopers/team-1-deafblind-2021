import './Signup.css';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [photo, setPhoto] = useState(null);
    const [photoError, setPhotoError] = useState(null);

    const { signup, isPending, error } = useSignup()
   
    const handleFileChange = (e) => {
        setPhoto(null)
        let selected = e.target.files[0]
        console.log(selected)
        if(!selected) {
            setPhotoError('Please select a file!')
         return
        }
        if(!selected.type.includes('image')) {
            setPhotoError('Selected file must be an image!')
         return
        }
        if(selected.size > 100000) {
            setPhotoError('Image file size must be less than 100kb')
         return
        }

        setPhotoError(null)
        setPhoto(selected)
        console.log("photo update !")
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName, photo)
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
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                />
            </label>
            <label>
                <span>Profile picture:</span>
                <input
                required
                type="file"
                onChange={handleFileChange}
                />
                {photoError && <div className="error">{photoError}</div>}
            </label>
            {!isPending && <button className="btn-form">Sign up</button>}
            {isPending && <button className="btn-form" disabled>Loading...</button>}
            {error && <div className="error">{error}</div>}
        </form>
        )

}
