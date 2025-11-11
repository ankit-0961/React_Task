import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchUserdata();
  }, []);

  const fetchUserdata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

    setUserData(data);
  };
  return (
    <div>
      <h2>UserData</h2>
      {userData && userData.length > 0 && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.length > 0 ? (
              userData.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <p>No Data Found</p>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UseEffect;
