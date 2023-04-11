import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button/Button";

const ErrorModal = (props) => {
//   const errorButtonClickHandler = () => {
//     props.onClick();
//   };

  return (
    <div >
      <div className={classes.backdrop} onClick={props.onClick} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          {" "}
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          {" "}
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
