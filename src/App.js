import React, { useState } from "react";
import NewUser from "./components/User/NewUser";
import UsersList from "./components/User/UsersList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);


  const addUserhandler = (enteredUser) => {
    setUsers((preiousUser) => {
      const updateduser = [...preiousUser];
      // id=(Math.random().toString());
      updateduser.unshift({ ...enteredUser });
      return updateduser;
    });
  };

  let content;

  if (users.length > 0) {
    content = <UsersList users={users} />;
  }

  return (
    <div className="card">
      <section>
        <NewUser onAdduser={addUserhandler} />
      </section>

      <section>{content} </section>
    </div>
  );
};

export default App;
