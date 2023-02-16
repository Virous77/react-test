import React from "react";
import BookmarkAction from "../users/bookmarks/BookmarkAction";

const Users = ({ user }) => {
  return (
    <li key={user.id}>
      <div className="user-data">
        <img src={user.avatar_url} alt={user.login} />
        <span>{user.login}</span>
      </div>

      <BookmarkAction
        user={{
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
        }}
      />
    </li>
  );
};

export default Users;
