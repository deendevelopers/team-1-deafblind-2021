import './Avatar.css'

export default function AvatarPro({ src }) {
    return (
        <div className="avatar">
        <img 
        src={src}
        alt="user avatar"/>
        </div>
    )
}
