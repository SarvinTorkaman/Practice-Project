import React, { useState } from "react";
import Button from "../UI/Button/Button";
import classes from "./NewUser.module.css";
import ErrorModal from "../UI/ErrorModal"
import Card from "../UI/Card";
const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error,setError] = useState("");

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageInputChangeHandlre = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length === 0 || age.length === 0) {
      setError({title: "Invalid Input", message:"Please fill all the fields with non-empty values"});      return;
    }

    if (+age < 1) {
      setError({title: "Invalid Age", message:"Age must be greater than 0"});
      return;
    }

    const user = {
      name: name,
      age: age,
      id: Math.random().toString(),
    };

    props.onAdduser(user);
    setName("");
    setAge("");
  };

  const removeErrorHandler=()=>{
    setError(null)

  }

  return (
    <div>
      {error && < ErrorModal title= {error.title} message={error.message}  onClick={removeErrorHandler}/>}
      <Card className={classes.input}>
        <form className="form-control" onSubmit={submitHandler}>
          <div>
            {" "}
            <label htmlFor="user name">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={name}
              onChange={nameInputChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              placeholder="Age"
              value={age}
              onChange={ageInputChangeHandlre}
            />
          </div>
          <Button type="submit" >Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;
