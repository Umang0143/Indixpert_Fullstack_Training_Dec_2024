import { Outlet } from "react-router-dom";

const DynamicProfile = (props) => {
  const {
    imgurl = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    name = "User Name",
    email = "Email Id",
    number = "Phone Number",
  } = props;
  return (
    <div className="profile-card mt-4">
      <h4>DynamicProfile</h4>
      <table>
        <tbody className="bg-white">
          <tr>
            <td rowSpan="3">
              <Avatar img={imgurl} />
            </td>
            <td>
              <strong>Name</strong>
            </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>
              <strong>Email</strong>
            </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>
              <strong>Phone</strong>
            </td>
            <td>{number}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <Outlet />
    </div>
  );
};

export const Avatar = ({ img }) => {
  return <img src={img} alt="userimage" />;
};

export default DynamicProfile;
