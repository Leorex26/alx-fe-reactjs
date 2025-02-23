import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>{userData.name}</h2>
            <p>Age: {userData.age || "N/A"}</p>
            <p>Bio: {userData.bio || "No bio available."}</p>
        </div>
    );
}

export default UserProfile;