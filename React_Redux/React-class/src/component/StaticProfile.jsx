const StaticProfile = () => {
  return (
    <div className="profile-card mt-4">
      <h4>StaticProfile</h4>
      <table>
        <tbody className="bg-white">
          <tr>
            <td rowSpan="3">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Kevin Williams"
              />
            </td>
            <td>
              <strong>Name</strong>
            </td>
            <td>Kevin Williams</td>
          </tr>
          <tr>
            <td>
              <strong>Email</strong>
            </td>
            <td>kevinwilliams@gmail.com</td>
          </tr>
          <tr>
            <td>
              <strong>Phone</strong>
            </td>
            <td>810-858-3292</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StaticProfile;