import { Avatar } from "@mui/material";

const ProfilePage = (props: any) => {
  const { profile } = props;
  return (
    <>
      <Avatar />
      <div>Name: {profile.name}</div>
    </>
  );
};
export default ProfilePage;
