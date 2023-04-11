import React from 'react';


const UserItem = (props) => {

console.log(props);
    return (
        

        <li  >
        {`${props.name} (${props.age})`}
      </li>
    )
}
export default UserItem;