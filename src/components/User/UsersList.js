import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul >
      {props.users.map((user) => (
        <div> <UserItem key={user.id} id={user.id} name={user.name} age={user.age} />
        
        {console.log(user)}
        </div>
        
      ))}
    </ul>
     </Card>
    
  );
};

export default UsersList;
