import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Viewing profile for user ID: {id}</p>
    </div>
  );
};

export default UserProfile;
