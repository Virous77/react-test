import React, { useState } from "react";
import Navbar from "./Components/layout/Navbar";
import Bookmark from "./Components/users/bookmarks/Bookmark";
import UserList from "./Components/users/userList/UserList";

const App = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <main>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "users" ? <UserList /> : <Bookmark />}
    </main>
  );
};

export default App;
