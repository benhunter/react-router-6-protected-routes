import protectedByHOC from "../protectedByHOC";

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
};

export const ProfileProtectedByHOC = protectedByHOC(Profile);

export default Profile;
