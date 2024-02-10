import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please Login</h2>;

  return (
    <div>
      <h2>Welcome</h2>
      <p>{user.userName} logged in.</p>
    </div>
  );
};

export default Profile;
