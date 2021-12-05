import { useCollection } from '../../hooks/useCollection';
import AvatarPro from '../AvatarPro';

export default function Users() {
    const { documents } = useCollection('users')
    console.log(documents);
    return (
        
        <>
          {documents && documents.map(user => (
              <div key={user.id}>
                  <span>{user.displayName}</span>
                <AvatarPro src={user.photoURL}/>
              </div>
          ))} 
        </>
    )
}
