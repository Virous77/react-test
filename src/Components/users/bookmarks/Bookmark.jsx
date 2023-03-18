import React, { useState } from "react";
import "./Bookmark.css";
import { useSelector } from "react-redux";
import { bookMarkUsr } from "../../../store/slices/userSlice";
import Users from "../../UtilsComponents/Users";
import Search from "../../search/Search";

const Bookmark = React.memo(() => {
  const bookmarkUsers = useSelector(bookMarkUsr);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchUsers = bookmarkUsers.filter((user) =>
    user.login.includes(search.toLowerCase())
  );

  return (
    <main className="userBar">
      {bookmarkUsers.length > 0 && (
        <Search search={search} handleSearch={handleChange} />
      )}

      {searchUsers.length === 0 && search.length === 0 && (
        <p className="empty">Your haven't Bookmarked any user yet!</p>
      )}

      {searchUsers.length === 0 && search.length > 0 && (
        <p className="empty">Users not found in your Bookmark List!</p>
      )}

      <ul className="userList-main bookmark-row">
        {searchUsers?.map((user) => (
          <Users user={user} key={user.id} />
        ))}
      </ul>
    </main>
  );
});

export default Bookmark;
