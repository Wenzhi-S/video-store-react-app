import React from "react";
import { useAuth } from "../components/AuthProvider";

function UserInfo() {
  const { user } = useAuth();

  return (
    <div className="user-info">
      {user ? (
        <div>
          <h3>User Details</h3>
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please Login First...</p>
      )}
    </div>
  );
}

export default UserInfo;
