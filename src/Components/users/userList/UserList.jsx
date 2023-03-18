import React, { useEffect, useState } from "react";
import "./UserList.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../store/api/userApi";
import { useUsers, error, loading } from "../../../store/slices/userSlice";
import Loader from "../../UI/Loader";
import Users from "../../UtilsComponents/Users";
import Pagination from "../../pagination/Pagination";
import Search from "../../search/Search";

const UserList = React.memo(() => {
  const dispatch = useDispatch();
  const users = useSelector(useUsers);
  const isError = useSelector(error);
  const isLoading = useSelector(loading);

  //search States
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchUsers = users.filter((user) =>
    user.login.includes(search.toLowerCase())
  );

  /////Pagination
  const [current, setCurrent] = useState(1);
  const usersPage = 5;

  const lastIndexProduct = current * usersPage;
  const firstIndexProduct = lastIndexProduct - usersPage;
  const currentUsers = searchUsers.slice(firstIndexProduct, lastIndexProduct);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, []);

  if (isLoading) return <Loader />;
  if (isError) return <p className="error">{isError}</p>;

  return (
    <main className="userBar">
      <Search handleSearch={handleSearch} />

      {searchUsers.length === 0 && <p className="empty">Users not found!</p>}

      <ul className="userList-main userList-row">
        {currentUsers?.map((user) => (
          <Users user={user} key={user.id} />
        ))}
      </ul>
      {searchUsers.length > 0 && (
        <Pagination
          usersPage={usersPage}
          totalUsers={searchUsers?.length}
          setCurrent={setCurrent}
          current={current}
        />
      )}
    </main>
  );
});

export default UserList;
