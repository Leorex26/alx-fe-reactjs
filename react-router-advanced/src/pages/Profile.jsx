import { Routes, Route, Link, useParams } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="user/1">User 1</Link> | 
        <Link to="user/2">User 2</Link>
      </nav>

      <Routes>
        <Route path="user/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

const UserProfile = () => {
  const { userId } = useParams();
  return <h3>Viewing profile of user {userId}</h3>;
};

export default Profile;
